import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule, ButtonModule, MatIconModule],
  exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {}
