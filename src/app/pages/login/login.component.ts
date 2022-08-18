import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService, UserInterface } from 'src/app/shared/_index';

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
  public returnUrl!: string;

  public isErrorCode: boolean = false;
  public isErrorPassword: boolean = false;
  public isErrorUser: boolean = false;
  public loading: boolean = false;

  public errorMessageCode!: string;
  public errorMessagePassword!: string;
  public errorMessageUser!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

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

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit(): void {
    this.loading = true;

    if (this.loginForm.valid && this.userData === 'admin') {
      this.login();
      return;
    }

    this.errorMessageCode = this.validateCode();
    this.errorMessagePassword = this.validatePassword();
    this.errorMessageUser = this.validateUser();
    this.loading = false;
  }

  protected login(): void {
    this.authenticationService
      .login(this.codeData, this.passwordData, this.userData)
      .pipe(first())
      .subscribe(
        (data: UserInterface) => {
          this.isErrorCode = this.isErrorUser = this.isErrorPassword = false;
          this.router.navigate([this.returnUrl]);
        },
        (error: any) => {
          console.log('ERRO = > não foi possivél inciar sessão: ', error);
          this.loading = false;
        }
      );
  }

  protected validateCode(): string {
    if (this.codeData === '') return 'campo código obrigatório';
    if (this.codeData.length !== 6) return 'código deve ter 6 caracteres';
    if (this.codeData !== '123456') return 'código okta incorreto';
    return '';
  }

  protected validatePassword(): string {
    if (this.passwordData === '') return 'campo senha obrigatório';
    if (this.passwordData !== 'admin') return 'senha incorreta';
    return '';
  }

  protected validateUser(): string {
    if (this.userData === '') return 'campo usuário obrigatório';
    if (this.userData !== 'admin') return 'usuário não existe';
    return '';
  }
}
