import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilterComponent } from './user-filter.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from 'src/app/components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(UserFilterComponent.name, () => {
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

  it('should emit void object when call onSearch without values in the form', () => {
    spyOn(component.search, 'emit');

    component.onSearch();

    expect(component.search.emit).toHaveBeenCalledWith({});
  });

  it('should emit values when call onSearch with values in the form', () => {
    spyOn(component.search, 'emit');

    component.filter.get('name')?.setValue('NOME');

    component.onSearch();

    expect(component.search.emit).toHaveBeenCalledWith({ name: 'NOME' });
  });
});
