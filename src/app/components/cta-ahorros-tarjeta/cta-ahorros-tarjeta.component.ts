import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-cta-ahorros-tarjeta',
  templateUrl: './cta-ahorros-tarjeta.component.html',
  styleUrls: ['./cta-ahorros-tarjeta.component.css']
})
export class CtaAhorrosTarjetaComponent implements OnInit {
  @Input()  producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
