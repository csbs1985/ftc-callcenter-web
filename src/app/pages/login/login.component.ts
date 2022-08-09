import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public errorMessagePassword!: string;
  public errorMessageUser!: string;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  protected initForm(): void {
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
      this.errorMessageCode = this.validateCode();
      this.errorMessagePassword = this.validatePassword();
      this.errorMessageUser = this.validateUser();
    }
  }

  protected login(): void {
    this.codeError = this.userError = this.passwordError = false;
    this.sessionService.sessionUser = true;
    this.sessionService.login(this.codeData, this.userData, this.passwordData);
  }

  protected validateCode(): string {
    if (this.codeData === '') return 'campo código obrigatório';
    if (this.codeData.length !== 6) return 'código deve ter 6 caracteres';
    if (this.codeData.toString() !== '123456') return 'código okta incorreto';
    return '';
  }

  protected validatePassword(): string {
    if (this.passwordData === '') return 'campo senha obrigatório';
    if (this.passwordData !== '123456') return 'senha incorreta';
    return '';
  }

  protected validateUser(): string {
    if (this.userData === '') return 'campo usuário obrigatório';
    if (this.userData !== 'charles') return 'usuário não existe';
    return '';
  }
}
