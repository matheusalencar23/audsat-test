import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl = environment.apiUrl + 'posts';

  constructor(private http: HttpClient) {}

  getCommentsByPost(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/${id}/comments`);
  }
}
