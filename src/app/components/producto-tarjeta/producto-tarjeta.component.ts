import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {
  @Input() producto: Producto;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  verProducto() {
    this.router.navigate(['/producto', this.producto.id]);

  }

}
