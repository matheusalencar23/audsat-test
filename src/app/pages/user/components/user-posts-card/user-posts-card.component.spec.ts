import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostsCardComponent } from './user-posts-card.component';

describe('UserPostsCardComponent', () => {
  let component: UserPostsCardComponent;
  let fixture: ComponentFixture<UserPostsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPostsCardComponent]
    });
    fixture = TestBed.createComponent(UserPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
