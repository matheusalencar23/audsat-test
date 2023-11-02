import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl + 'users';

  constructor(private http: HttpClient) {}

  getAllUsers(pageIndex: number, pageSize: number): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        return [...users].splice(pageIndex * pageSize, pageSize);
      })
    );
  }
}
