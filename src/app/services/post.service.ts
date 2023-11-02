import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = environment.apiUrl + 'users';

  constructor(private http: HttpClient) {}

  getPostsByUser(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${id}/posts`);
  }
}
