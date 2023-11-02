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
  logs: Log[] = [];
  page = 1;
  limit = 50;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  onScroll() {
    this.page++;
    this.getLogs();
  }

  getLogs(): void {
    this.logService.getLogs(this.page, this.limit).subscribe((logs) => {
      this.logs = [...new Set([...this.logs, ...logs])];
    });
  }
}
