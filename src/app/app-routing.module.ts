import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { CtaAhorrosComponent } from './components/cta-ahorros/cta-ahorros.component';
import { TarjCreditoComponent } from './components/tarj-credito/tarj-credito.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'cta-ahorros/:productoId', component: CtaAhorrosComponent },
  { path: 'tarj-credito/:productoId', component: TarjCreditoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
