import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingScreenComponent } from './loading-screen.component';

@NgModule({
  declarations: [LoadingScreenComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingScreenComponent],
})
export class LoadingScreenModule {}
