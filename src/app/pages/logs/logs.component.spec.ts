import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponent } from './logs.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsComponent],
      imports: [HttpClientTestingModule, PageTitleModule, InfiniteScrollModule],
    });
    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
