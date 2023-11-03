import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'audsat-test';

  @HostListener('window:click', ['$event'])
  onClick(event: Event): void {
    const textContent = (event?.target as any).textContent;
    if (textContent) {
      this.logService.log(`Click on ${textContent}/${event.target}`);
    } else {
      this.logService.log(`Click on ${event.target}`);
    }
  }

  constructor(private router: Router, private logService: LogService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.logService.log(`Navigate to ${event.url}`);
      }
    });
  }
}
