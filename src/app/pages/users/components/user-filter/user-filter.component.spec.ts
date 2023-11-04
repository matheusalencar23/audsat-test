import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilterComponent } from './user-filter.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserFilterComponent', () => {
  let component: UserFilterComponent;
  let fixture: ComponentFixture<UserFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFilterComponent],
      imports: [
        MatInputModule,
        ButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(UserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
