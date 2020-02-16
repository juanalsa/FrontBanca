import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-cta-ahorros',
  templateUrl: './cta-ahorros.component.html',
  styleUrls: ['./cta-ahorros.component.css']
})
export class CtaAhorrosComponent implements OnInit {
  private producto: Producto;

  constructor( private activatedRoute: ActivatedRoute, private productosService: ProductosService ) { 
    const productoId:string = activatedRoute.snapshot.paramMap.get('productoId');
    this.producto = productosService.getProducto( productoId );
  }

  ngOnInit() {
  }

}
