import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private prodsCtaAhorro:Producto[] = [];
  private prodsTarjCred:Producto[] = [];

  constructor( private productosService:ProductosService, private router:Router ) { }

  ngOnInit() {
    this.prodsCtaAhorro = this.productosService.getProductosBanco('DEPOSIT_ACCOUNT');
    this.prodsTarjCred = this.productosService.getProductosBanco('CREDIT_CARD');
    // console.log(this.productos);
    
  }

  verProducto( productoId:string ) {
    this.router.navigate(['/producto', productoId]);
  }

  cargarProdsOtrosBancos( evt:MatSlideToggleChange ) {
    // console.log(evt);

    if ( evt.checked ) {
      this.prodsCtaAhorro = this.productosService.getProductosOtrosBancos('DEPOSIT_ACCOUNT');
      this.prodsTarjCred = this.productosService.getProductosOtrosBancos('CREDIT_CARD');

    } else {
      this.prodsCtaAhorro = this.productosService.getProductosBanco('DEPOSIT_ACCOUNT');
      this.prodsTarjCred = this.productosService.getProductosBanco('CREDIT_CARD');

    }
    
  }

}
