import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Observable<User[]> = new Observable();
  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'phone',
    'actions',
  ];

  length = 10;
  pageSize = 10;
  pageIndex = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.getAllUsers();
  }

  getAllUsers(): void {
    this.users = this.userService.getAllUsers(this.pageIndex, this.pageSize);
  }
}
