import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAhorrosTarjetaComponent } from './cta-ahorros-tarjeta.component';

describe('CtaAhorrosTarjetaComponent', () => {
  let component: CtaAhorrosTarjetaComponent;
  let fixture: ComponentFixture<CtaAhorrosTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaAhorrosTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaAhorrosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
