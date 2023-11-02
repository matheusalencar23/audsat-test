import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserFilter } from '../models/user-filter';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl + 'users';

  constructor(private http: HttpClient) {}

  getAllUsers(
    pageIndex: number,
    pageSize: number,
    filter: UserFilter
  ): Observable<User[]> {
    let params = new HttpParams();
    Object.entries(filter).forEach(([key, value]) => {
      params = params.append(key, value);
    });
    return this.http.get<User[]>(this.apiUrl, { params }).pipe(
      map((users) => {
        return [...users].splice(pageIndex * pageSize, pageSize);
      })
    );
  }
}
