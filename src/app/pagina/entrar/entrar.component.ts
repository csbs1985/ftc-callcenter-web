import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import {
  UsuarioService,
  UsuarioInterface,
  RotaEnum,
} from 'src/app/shared/_index';

@Component({
  selector: 'ftc-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
})
export class EntrarComponent implements OnInit {
  readonly forgotPassword =
    'https://idm.semparar.com.br/identity/faces/signin?_afrLoop=55608894749594894&_afrWindowMode=0&_afrWindowId=popup&_adf.ctrl-state=qcop06eq7_6';

  public loginForm!: FormGroup;

  public codigoValor: string = '';
  public senhaValor: string = '';
  public usuarioValor: string = '';
  public returnUrl!: string;

  public isErroCodigo: boolean = false;
  public isErroSenha: boolean = false;
  public isErroUsuario: boolean = false;
  public isCarregando: boolean = false;

  public erroMensagemCodigo!: string;
  public erroMensagemSenha!: string;
  public erroMensagemUsuario!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    if (this.usuarioService.usuarioValor) {
      this.router.navigate([RotaEnum.INICIO]);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      codigo: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      senha: ['', Validators.required],
      usuario: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmit(): void {
    this.isCarregando = true;

    if (this.loginForm.valid && this.usuarioValor === 'admin') {
      this.entrar();
      return;
    }

    this.erroMensagemCodigo = this.validateCode();
    this.erroMensagemSenha = this.validatePassword();
    this.erroMensagemUsuario = this.validateUser();
    this.isCarregando = false;
  }

  private entrar(): void {
    if (this.codigoValor !== '123456') {
      this.erroMensagemCodigo = 'código okta incorreto';
      this.isCarregando = false;
      return;
    }

    this.usuarioService
      .entrar(this.codigoValor, this.senhaValor, this.usuarioValor)
      .pipe(first())
      .subscribe(
        (data: UsuarioInterface) => {
          this.isErroCodigo = this.isErroUsuario = this.isErroSenha = false;
          this.router.navigate([this.returnUrl]);
        },
        (error: any) => {
          console.log('ERRO = > não foi possivél inciar sessão: ', error);
          this.isCarregando = false;
        }
      );
  }

  private validateCode(): string {
    if (this.codigoValor === '') return 'campo código obrigatório';
    if (this.codigoValor.length !== 6) return 'código deve ter 6 caracteres';
    return '';
  }

  private validatePassword(): string {
    if (this.senhaValor === '') return 'campo senha obrigatório';
    if (this.senhaValor !== 'admin') return 'senha incorreta';
    return '';
  }

  private validateUser(): string {
    if (this.usuarioValor === '') return 'campo usuário obrigatório';
    if (this.usuarioValor !== 'admin') return 'usuário inexistente';
    return '';
  }
}
