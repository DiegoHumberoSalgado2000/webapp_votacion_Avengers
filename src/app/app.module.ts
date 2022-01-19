import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { HomeComponent } from './components/home/home.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { VengadoresComponent } from './components/vengadores/vengadores.component';
import {APP_ROUTING} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    ResultadoComponent,
    VengadoresComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
