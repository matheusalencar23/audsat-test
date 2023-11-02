import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [LogsComponent],
  imports: [
    CommonModule,
    LogsRoutingModule,
    PageTitleModule,
    InfiniteScrollModule,
  ],
})
export class LogsModule {}
