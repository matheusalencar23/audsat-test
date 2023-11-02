import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PageTitleModule,
    MatTableModule,
    MatIconModule,
    ButtonModule,
  ],
})
export class UsersModule {}
