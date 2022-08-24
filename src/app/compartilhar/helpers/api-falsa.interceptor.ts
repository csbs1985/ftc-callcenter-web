import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { PerfilEnum, UsuarioInterface } from '../_index';

const usuarios: UsuarioInterface[] = [
  {
    id: 1,
    usuario: 'admin',
    senha: 'admin',
    primeiroNome: 'charles',
    sobrenome: 'atento',
    token: '',
    perfil: PerfilEnum.ADMIN,
  },
  {
    id: 2,
    usuario: 'usuario',
    senha: 'usuario',
    primeiroNome: 'Normal',
    sobrenome: 'User',
    token: '',
    perfil: PerfilEnum.OPERADOR,
  },
];

@Injectable()
export class ApiFalsaInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/usuarios/autenticar') && method === 'POST':
          return autenticar();
        case url.endsWith('/usuarios') && method === 'GET':
          return getUsers();
        case url.match(/\/usuarios\/\d+$/) && method === 'GET':
          return getUserById();
        default:
          return next.handle(request);
      }
    }

    function autenticar() {
      const { usuario, senha } = body;
      const _usuario: any = usuarios.find(
        (x) => x.usuario === usuario && x.senha === senha
      );
      if (!_usuario) return error('usuário ou senha icnorreto');
      return ok({
        id: _usuario.id,
        _usuario: _usuario._usuario,
        primeiroNome: _usuario.primeiroNome,
        sobrenome: _usuario.sobrenome,
        role: _usuario.perfil,
        token: `fake-jwt-token.${_usuario.id}`,
      });
    }

    function getUsers() {
      if (!isAdmin()) return unauthorized();
      return ok(usuarios);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      if (!isAdmin() && usuarioAtual()!.id !== idFromUrl())
        return unauthorized();

      const usuario = usuarios.find((x) => x.id === idFromUrl());
      return ok(usuario);
    }

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500));
    }

    function unauthorized() {
      return throwError({
        status: 401,
        error: { message: 'unauthorized' },
      }).pipe(materialize(), delay(500), dematerialize());
    }

    function error(message: any) {
      return throwError({ status: 400, error: { message } }).pipe(
        materialize(),
        delay(500),
        dematerialize()
      );
    }

    function isLoggedIn() {
      const authHeader = headers.get('Authorization') || '';
      return authHeader.startsWith('Bearer fake-jwt-token');
    }

    function isAdmin() {
      return isLoggedIn() && usuarioAtual()!.perfil === PerfilEnum.ADMIN;
    }

    function usuarioAtual() {
      if (!isLoggedIn()) return;
      const id = parseInt(headers.get('Authorization')!.split('.')[1]);
      return usuarios.find((x) => x.id === id);
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const ApiFalsaProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiFalsaInterceptor,
  multi: true,
};
