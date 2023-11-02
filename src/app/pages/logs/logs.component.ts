import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from 'src/app/models/log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  logs$: Observable<Log[]> = new Observable();

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logs$ = this.logService.getLogs();
  }
}
