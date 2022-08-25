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

  public form!: FormGroup;

  public valorCodigo: string = '';
  public valorSenha: string = '';
  public valorUsuario: string = '';

  public isCarregando: boolean = false;
  public returnUrl!: string;

  public isErroCodigo: boolean = false;
  public isErroSenha: boolean = false;
  public isErroUsuario: boolean = false;

  public erroCodigo!: string;
  public erroMensagemSenha!: string;
  public erroUsuario!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    if (this.usuarioService.valorUsuario) {
      this.router.navigate([RotaEnum.INICIO]);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
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

    if (this.form.valid && this.valorUsuario === 'admin') {
      this.entrar();
      return;
    }

    this.erroCodigo = this.validateCode();
    this.erroMensagemSenha = this.validatePassword();
    this.erroUsuario = this.validateUser();
    this.isCarregando = false;
  }

  private entrar(): void {
    if (this.valorCodigo !== '123456') {
      this.erroCodigo = 'código okta incorreto';
      this.isCarregando = false;
      return;
    }

    this.usuarioService
      .entrar(this.valorCodigo, this.valorSenha, this.valorUsuario)
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
    if (this.valorCodigo === '') return 'campo código obrigatório';
    if (this.valorCodigo.length !== 6) return 'código deve ter 6 caracteres';
    return '';
  }

  private validatePassword(): string {
    if (this.valorSenha === '') return 'campo senha obrigatório';
    if (this.valorSenha !== 'admin') return 'senha incorreta';
    return '';
  }

  private validateUser(): string {
    if (this.valorUsuario === '') return 'campo usuário obrigatório';
    if (this.valorUsuario !== 'admin') return 'usuário inexistente';
    return '';
  }
}
