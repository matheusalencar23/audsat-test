import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-user-posts-card',
  templateUrl: './user-posts-card.component.html',
  styleUrls: ['./user-posts-card.component.scss'],
})
export class UserPostsCardComponent {
  activePost: number = 0;

  @Input({ required: true }) posts: Post[] = [];

  selectPost(id: number): void {
    if (this.activePost === id) {
      this.activePost = 0;
    } else {
      this.activePost = id;
    }
  }
}
