import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsCardComponent } from './user-posts-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogModule } from 'src/app/components/confirm-dialog/confirm-dialog.module';
import { PostService } from 'src/app/services/post.service';
import { Observable, of } from 'rxjs';

describe(UserPostsCardComponent.name, () => {
  let component: UserPostsCardComponent;
  let fixture: ComponentFixture<UserPostsCardComponent>;

  const postServiceMock = jasmine.createSpyObj('PostService', [
    'getCommentsByPost',
    'deletePost',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPostsCardComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        ConfirmDialogModule,
      ],
      providers: [{ provide: PostService, useValue: postServiceMock }],
    });
    fixture = TestBed.createComponent(UserPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set activePost as 0 when call selectPost with id 0', () => {
    component.selectPost(0);

    expect(component.activePost).toBe(0);
  });

  it('should set activePost as parameter when call selectPost with id diferent 0', () => {
    component.selectPost(10);

    expect(component.activePost).toBe(10);
    expect((component as any).postService.getCommentsByPost).toHaveBeenCalled();
  });

  it('should open dialog when call deletePost', () => {
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => new Observable(),
    } as MatDialogRef<typeof component>);

    component.deletePost(new Event('click'), 5);

    expect(component.dialog.open).toHaveBeenCalled();
  });
});
