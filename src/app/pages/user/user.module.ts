import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, PageTitleModule, MatCardModule],
})
export class UserModule {}
