import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = new BehaviorSubject(false);
  loading$ = this._loading.asObservable();

  constructor() {}

  start(): void {
    this._loading.next(true);
  }

  stop(): void {
    this._loading.next(false);
  }
}
