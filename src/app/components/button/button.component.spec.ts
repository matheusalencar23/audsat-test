import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { Component } from '@angular/core';
import { ButtonModule } from './button.module';

@Component({
  standalone: true,
  imports: [ButtonModule],
  template: '<app-button>CLICK</app-button>',
})
class DummyComponent {}

describe(ButtonComponent.name, () => {
  let component: ButtonComponent;
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
    const buttonComponent = fixture.debugElement.children[0];
    expect(buttonComponent.name).toBe('app-button');
    expect(buttonComponent.children.length).toBe(1);
    expect(buttonComponent.children[0].name).toBe('button');
    expect(buttonComponent.children[0].nativeElement.textContent).toBe('CLICK');
  });
});
