import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserFilterModule } from 'src/app/components/user-filter/user-filter.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PageTitleModule,
    MatTableModule,
    MatIconModule,
    ButtonModule,
    MatPaginatorModule,
    UserFilterModule,
  ],
})
export class UsersModule {}
