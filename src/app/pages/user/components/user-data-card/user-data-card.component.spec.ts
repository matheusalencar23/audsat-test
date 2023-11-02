import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataCardComponent } from './user-data-card.component';

describe('UserDataCardComponent', () => {
  let component: UserDataCardComponent;
  let fixture: ComponentFixture<UserDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataCardComponent]
    });
    fixture = TestBed.createComponent(UserDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
