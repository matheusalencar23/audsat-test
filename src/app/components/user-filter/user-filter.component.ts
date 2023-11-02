import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFilter } from 'src/app/models/user-filter';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
})
export class UserFilterComponent {
  filter!: FormGroup;

  @Output() search = new EventEmitter<UserFilter>();

  constructor(private fB: FormBuilder) {
    this.filter = this.fB.group({
      name: '',
      username: '',
      email: '',
      phone: '',
    });
  }

  onSearch(): void {
    const userFilter: UserFilter = {};
    Object.entries(this.filter.value).forEach(([key, value]) => {
      if (value) userFilter[key as keyof UserFilter] = (value as string).trim();
    });
    this.search.emit(userFilter);
  }
}
