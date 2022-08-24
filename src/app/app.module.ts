import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import {
  ApiFalsaProvider,
  ErroInterceptor,
  JwtInterceptor,
} from './compartilhar/_index';
import { ComponenteModule } from './componente/componente.module';
import { PaginaModule } from './pagina/pagina.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponenteModule,
    PaginaModule,
    BibliotecaModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    ApiFalsaProvider, // TODO: provedor usado para criar backend falso
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
