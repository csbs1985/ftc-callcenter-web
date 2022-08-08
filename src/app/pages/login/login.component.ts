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

  constructor(
    private formBUilder: FormBuilder,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBUilder.group({
      code: ['', Validators.required],
      password: ['', Validators.required],
      user: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.codeError = this.codeData === '' ? true : false;
      this.passwordError = this.passwordData === '' ? true : false;
      this.userError = this.userData === '' ? true : false;
    }
  }

  private login(): void {
    this.userError = this.passwordError = false;
    this.sessionService.sessionUser = true;
    // TODO: validar usuário na API
    this.sessionService.login(this.codeData, this.userData, this.passwordData);
  }
}
