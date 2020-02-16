import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarj-cred-tarjeta',
  templateUrl: './tarj-cred-tarjeta.component.html',
  styleUrls: ['./tarj-cred-tarjeta.component.css']
})
export class TarjCredTarjetaComponent implements OnInit {
  @Input() producto: Producto;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
