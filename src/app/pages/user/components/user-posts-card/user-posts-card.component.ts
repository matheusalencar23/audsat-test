import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { Comment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

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

  constructor(
    private postService: PostService,
    public dialog: MatDialog,
    private snackbarService: SnackbarService
  ) {}

  selectPost(id: number): void {
    if (this.activePost === id) {
      this.activePost = 0;
      this.commets$ = new Observable();
    } else {
      this.activePost = id;
      this.commets$ = this.postService.getCommentsByPost(this.activePost);
    }
  }

  deletePost(event: Event, id: number): void {
    event.preventDefault();
    event.stopPropagation();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Tem certeza que deseja deletar esse post?',
        confirm: false,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.postService.deletePost(id).subscribe({
          next: () => {
            this.snackbarService.open('Post excluído com sucesso', 'success');
          },
          error: () => {
            this.snackbarService.open(
              'Ocorreu algum problema ao excluir o post',
              'error'
            );
          },
        });
      }
    });
  }
}
