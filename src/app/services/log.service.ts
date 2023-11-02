import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private url = environment.logsApiUrl + '/log';
  private showAlertGeoPermission = true;

  constructor(private http: HttpClient) {}

  log(action: string): void {
    const path = window.location.pathname;
    const userAgent = window.navigator.userAgent;
    let lat = 0,
      long = 0;

    console.log('geolocation' in window.navigator);
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('sadsd');
        lat = position.coords.latitude;
        long = position.coords.longitude;
      },
      (e) => {
        if (e.code === e.PERMISSION_DENIED && this.showAlertGeoPermission) {
          alert(
            'Para um melhor registro de logs libere o acesso a localização'
          );
          this.showAlertGeoPermission = false;
        }
      }
    );

    this.http
      .post(this.url, {
        action,
        path,
        userAgent,
        lat,
        long,
      })
      .subscribe({});
  }
}
