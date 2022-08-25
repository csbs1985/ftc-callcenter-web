import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibsModule } from './libs/libs.module';
import {
  ApiFalsaProvider,
  ErroInterceptor,
  JwtInterceptor,
} from './shared/_index';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    PagesModule,
    LibsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    ApiFalsaProvider, // TODO: provedor usado para criar backend falso
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
