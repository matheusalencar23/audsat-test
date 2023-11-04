import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleComponent } from './page-title.component';
import { PageTitleModule } from './page-title.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [PageTitleModule],
  template: '<app-page-title>PAGE</app-page-title>',
})
class DummyComponent {}

describe(PageTitleComponent.name, () => {
  let component: PageTitleComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.children.length).toBe(1);

    const pageTitleComponent = fixture.debugElement.children[0];
    expect(pageTitleComponent.name).toBe('app-page-title');
    expect(pageTitleComponent.children.length).toBe(1);
    expect(pageTitleComponent.children[0].name).toBe('h2');
    expect(pageTitleComponent.children[0].nativeElement.textContent).toBe(
      'PAGE'
    );
  });
});
