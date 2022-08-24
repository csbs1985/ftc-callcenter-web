import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle/toggle.component';
import { BibliotecaModule } from '../libs/libs.module';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favoritos/favoritos.component';
import { ProgressComponent } from './progress/progress.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  declarations: [
    IconComponent,
    MenuComponent,
    ArticleComponent,
    ToggleComponent,
    HeaderComponent,
    FavoritesComponent,
    ProgressComponent,
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BibliotecaModule,
  ],
  exports: [
    IconComponent,
    MenuComponent,
    ArticleComponent,
    ToggleComponent,
    HeaderComponent,
    FavoritesComponent,
    ProgressComponent,
    OverlayComponent,
  ],
})
export class ComponenteModule {}
