import { BrowserModule } from '@angular/platform-browser';
//import { NgModule, LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CtaAhorrosTarjetaComponent } from './components/cta-ahorros-tarjeta/cta-ahorros-tarjeta.component';
import { HomeComponent } from './components/home/home.component';
import { TarjCredTarjetaComponent } from './components/tarj-cred-tarjeta/tarj-cred-tarjeta.component';
import { CtaAhorrosComponent } from './components/cta-ahorros/cta-ahorros.component';
import { TarjCreditoComponent } from './components/tarj-credito/tarj-credito.component';

// Material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';


// Pipes
import { CreditCardPipe } from './pipes/credit-card.pipe';

/*import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);*/

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    CtaAhorrosTarjetaComponent,
    TarjCredTarjetaComponent,
    CreditCardPipe,
    CtaAhorrosComponent,
    TarjCreditoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
