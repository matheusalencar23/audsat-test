import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
