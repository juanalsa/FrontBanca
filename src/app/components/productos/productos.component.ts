import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  prodsCtaAhorro:Producto[] = [];

  constructor( private productosService:ProductosService, private router:Router ) { }

  ngOnInit() {
    this.prodsCtaAhorro = this.productosService.getProductosBanco('DEPOSIT_ACCOUNT');
    // console.log(this.productos);
    
  }

  verProducto( productoId:string ) {
    this.router.navigate(['/producto', productoId]);
  }

}
