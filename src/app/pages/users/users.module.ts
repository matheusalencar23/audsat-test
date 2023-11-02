import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UserFilterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PageTitleModule,
    MatTableModule,
    MatIconModule,
    ButtonModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
