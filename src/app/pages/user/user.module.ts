import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { UserDataCardComponent } from './components/user-data-card/user-data-card.component';
import { UserPostsCardComponent } from './components/user-posts-card/user-posts-card.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [UserComponent, UserDataCardComponent, UserPostsCardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PageTitleModule,
    MatCardModule,
    ButtonModule,
  ],
})
export class UserModule {}
