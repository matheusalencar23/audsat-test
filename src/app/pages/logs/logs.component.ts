import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.getLogs().subscribe({
      next: (logs) => {
        console.log(logs);
      },
    });
  }
}
