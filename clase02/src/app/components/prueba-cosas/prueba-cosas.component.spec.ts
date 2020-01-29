import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCOSASComponent } from './prueba-cosas.component';

describe('PruebaCOSASComponent', () => {
  let component: PruebaCOSASComponent;
  let fixture: ComponentFixture<PruebaCOSASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaCOSASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCOSASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
