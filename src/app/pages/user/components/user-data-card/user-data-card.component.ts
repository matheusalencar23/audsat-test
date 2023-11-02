import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-data-card',
  templateUrl: './user-data-card.component.html',
  styleUrls: ['./user-data-card.component.scss'],
})
export class UserDataCardComponent {
  @Input({ required: true }) user!: User;
}
