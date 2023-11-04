import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, UserFilterComponent],
      imports: [
        HttpClientTestingModule,
        PageTitleModule,
        MatPaginatorModule,
        MatInputModule,
        ButtonModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
