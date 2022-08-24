import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  CriptografiaService,
  LocalStorageService,
  RotaEnum,
  UsuarioInterface,
} from '../_index';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject!: BehaviorSubject<UsuarioInterface>;

  public usuarioAtual: Observable<UsuarioInterface>;

  constructor(
    private criptografiaService: CriptografiaService,
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.hasCurrentUser();
    this.usuarioAtual = this.usuarioSubject.asObservable();
  }

  public entrar(
    codigo: string,
    senha: string,
    usuario: string
  ): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/usuarios/autenticar`, {
        usuario,
        senha,
      })
      .pipe(
        map((usuario: UsuarioInterface) => {
          this.localStorageService.save(
            'usuarioAtual',
            JSON.stringify(usuario)
          );
          this.usuarioSubject.next(usuario);
          return usuario;
        })
      );
  }

  private hasCurrentUser(): void {
    var usuario = localStorage.getItem('usuarioAtual') ?? null;

    if (usuario) {
      this.usuarioSubject = new BehaviorSubject<UsuarioInterface>(
        JSON.parse(
          this.criptografiaService.decrypt(localStorage.getItem('usuarioAtual'))
        )
      );
    } else {
      this.usuarioSubject = new BehaviorSubject<UsuarioInterface>(null!);
    }
  }

  public logout(): void {
    try {
      this.usuarioSubject.next(null!);
      this.localStorageService.endSession();
      this.router.navigate([RotaEnum.ENTRAR]);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }

  public get usuarioValor(): any {
    return this.usuarioSubject.value;
  }
}
