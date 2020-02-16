import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tarj-credito',
  templateUrl: './tarj-credito.component.html',
  styleUrls: ['./tarj-credito.component.css']
})
export class TarjCreditoComponent implements OnInit {
  private producto: Producto;

  constructor( private activatedRoute: ActivatedRoute, private productosService: ProductosService ) {
    const productoId:string = activatedRoute.snapshot.paramMap.get('productoId');
    this.producto = productosService.getProducto( productoId );
  }

  ngOnInit() {
  }

}
