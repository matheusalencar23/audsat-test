import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private url = environment.logsApiUrl + '/log';
  private showAlertGeoPermission = true;

  constructor(private http: HttpClient) {}

  getLogs(page: number, limit: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('_page', page);
    params = params.append('_limit', limit);
    return this.http.get<any>(this.url, { params });
  }

  log(action: string): void {
    const log: Log = {
      action,
      path: window.location.pathname,
      userAgent: window.navigator.userAgent,
      lat: 0,
      long: 0,
      date: new Date(),
    };

    this.getGeolocation(log)
      .pipe(
        switchMap((newLog) => {
          return this.http.post(this.url, newLog);
        })
      )
      .subscribe({
        error: (e) => {
          console.error('Ocorreu um erro ao salvar o log: ', log, e);
        },
      });
  }

  private getGeolocation(log: Log): Observable<Log> {
    const subject = new Subject<Log>();

    if ('geolocation' in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          log.lat = position.coords.latitude;
          log.long = position.coords.longitude;
          subject.next(log);
          subject.complete();
        },
        (e) => {
          if (e.code === e.PERMISSION_DENIED && this.showAlertGeoPermission) {
            alert(
              'Para um melhor registro de logs libere o acesso a localização'
            );
            this.showAlertGeoPermission = false;
          }
          subject.next(log);
          subject.complete();
        }
      );
    } else {
      console.error('Este navegador não da suporte a API de geolocalização');
      this.showAlertGeoPermission = false;
      subject.next(log);
      subject.complete();
    }

    return subject;
  }
}
