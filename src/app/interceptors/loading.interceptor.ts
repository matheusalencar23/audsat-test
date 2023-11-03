import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requestCount = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.endsWith('/log') && request.method !== 'POST') {
      this.requestCount++;

      if (this.requestCount) {
        this.loadingService.start();
      }

      return next.handle(request).pipe(
        finalize(() => {
          this.requestCount--;
          if (!this.requestCount) {
            this.loadingService.stop();
          }
        })
      );
    }
    return next.handle(request);
  }
}
