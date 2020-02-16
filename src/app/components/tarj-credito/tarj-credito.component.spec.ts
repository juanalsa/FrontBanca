import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjCreditoComponent } from './tarj-credito.component';

describe('TarjCreditoComponent', () => {
  let component: TarjCreditoComponent;
  let fixture: ComponentFixture<TarjCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
