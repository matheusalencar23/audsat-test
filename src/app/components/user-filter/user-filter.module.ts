import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UserFilterComponent } from './user-filter.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [UserFilterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [UserFilterComponent],
})
export class UserFilterModule {}
