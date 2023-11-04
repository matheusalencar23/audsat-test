import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataCardComponent } from './user-data-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/models/user';

const USER: User = {
  id: 1,
  name: 'nome',
  username: 'usuario',
  email: 'email',
  address: {
    street: 'rua',
    suite: 'ap 1',
    city: 'cidade',
    zipcode: 'cep',
    geo: {
      lat: 'lat',
      lng: 'lng',
    },
  },
  phone: 'telefone',
  website: 'site',
};

describe('UserDataCardComponent', () => {
  let component: UserDataCardComponent;
  let fixture: ComponentFixture<UserDataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataCardComponent],
      imports: [MatCardModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(UserDataCardComponent);
    component = fixture.componentInstance;
    component.user = USER;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
