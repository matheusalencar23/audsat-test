import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-user-posts-card',
  templateUrl: './user-posts-card.component.html',
  styleUrls: ['./user-posts-card.component.scss'],
  animations: [
    trigger('dropdownComments', [
      transition(':enter', [
        style({ height: 0, padding: 0, borderTop: 'none' }),
        animate(
          '500ms ease',
          style({
            height: '*',
            padding: '0.5rem 1rem',
            borderTop: '1px solid #000',
          })
        ),
      ]),
      transition(':leave', [
        style({
          height: '*',
          padding: '0.5rem 1rem',
          borderTop: '1px solid #000',
        }),
        animate(
          '500ms ease',
          style({ height: 0, padding: 0, borderTop: 'none' })
        ),
      ]),
    ]),
  ],
})
export class UserPostsCardComponent {
  activePost: number = 0;
  commets$: Observable<Comment[]> = new Observable();

  @Input({ required: true }) posts: Post[] = [];

  constructor(private commentService: CommentService) {}

  selectPost(id: number): void {
    if (this.activePost === id) {
      this.activePost = 0;
      this.commets$ = new Observable();
    } else {
      this.activePost = id;
      this.commets$ = this.commentService.getCommentsByPost(this.activePost);
    }
  }
}
