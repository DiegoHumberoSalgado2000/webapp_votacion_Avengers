import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ResultadoComponent} from "./components/resultado/resultado.component";
import {VengadoresComponent} from "./components/vengadores/vengadores.component";

const APP_ROUTES: Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'vengadores', component: VengadoresComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
