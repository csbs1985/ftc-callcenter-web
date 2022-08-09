import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'ftc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly forgotPassword =
    'https://idm.semparar.com.br/identity/faces/signin?_afrLoop=55608894749594894&_afrWindowMode=0&_afrWindowId=popup&_adf.ctrl-state=qcop06eq7_6';

  public loginForm!: FormGroup;

  public codeData: string = '';
  public passwordData: string = '';
  public userData: string = '';

  public codeError: boolean = false;
  public passwordError: boolean = false;
  public userError: boolean = false;

  public errorMessageCode!: string;
  public errorMessagePassword: string;
  public errorMessageUser: string;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService
  ) {
    this.errorMessagePassword = 'campo senha obrigatório';
    this.errorMessageUser = 'campo usuário obrigatório';
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      password: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.validateCode();
      this.passwordError = this.passwordData === '' ? true : false;
      this.userError = this.userData === '' ? true : false;
    }
  }

  private validateCode(): void {
    if (this.codeData === '') {
      this.errorMessageCode = 'campo código obrigatório';
      this.codeError = true;
      return;
    }
    if (this.codeData.length !== 6) {
      this.errorMessageCode = 'código deve ter 6 caracteres';
      this.codeError = true;
      return;
    }
    if (this.codeData.toString() !== '123456') {
      this.errorMessageCode = 'código okta incorreto';
      this.codeError = true;
      return;
    }

    this.codeError = false;
  }

  private login(): void {
    this.codeError = this.userError = this.passwordError = false;
    this.sessionService.sessionUser = true;
    this.sessionService.login(this.codeData, this.userData, this.passwordData);
  }
}
