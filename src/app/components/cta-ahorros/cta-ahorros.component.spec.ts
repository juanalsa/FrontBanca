import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAhorrosComponent } from './cta-ahorros.component';

describe('CtaAhorrosComponent', () => {
  let component: CtaAhorrosComponent;
  let fixture: ComponentFixture<CtaAhorrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaAhorrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
