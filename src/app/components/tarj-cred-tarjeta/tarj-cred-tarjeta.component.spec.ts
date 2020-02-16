import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjCredTarjetaComponent } from './tarj-cred-tarjeta.component';

describe('TarjCredTarjetaComponent', () => {
  let component: TarjCredTarjetaComponent;
  let fixture: ComponentFixture<TarjCredTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjCredTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjCredTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
