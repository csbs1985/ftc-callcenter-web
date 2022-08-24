import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RotaEnum, UsuarioService } from '../_index';

@Injectable({
  providedIn: 'root',
})
export class AutenticarGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const usuario = this.usuarioService.usuarioValor;

    if (usuario) {
      if (
        route.data['roles'] &&
        route.data['roles'].indexOf(usuario.role) === -1
      ) {
        this.router.navigate([RotaEnum.INICIO]);
        return false;
      }

      return true;
    }

    this.router.navigate([RotaEnum.ENTRAR]);
    return false;
  }
}
