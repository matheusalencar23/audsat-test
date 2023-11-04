import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsCardComponent } from './user-posts-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UserPostsCardComponent', () => {
  let component: UserPostsCardComponent;
  let fixture: ComponentFixture<UserPostsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPostsCardComponent],
      imports: [HttpClientTestingModule, MatDialogModule, MatSnackBarModule],
    });
    fixture = TestBed.createComponent(UserPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
