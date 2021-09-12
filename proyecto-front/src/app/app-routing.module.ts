import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [{
  path:'', redirectTo: 'inicio', pathMatch: 'full'
}, {
  path: 'inicio', component: InicioComponent
}, {
  path: 'consultar-web', loadChildren: () => import('./components/consultar-web/consultar-web-routing.module').then(x => x.ConsultarWebRoutingModule)
  //Carga perezosa, consiste en retrasar la carga o inicialización de un objeto hasta el mismo momento de su utilización
}, {
  path: '**', redirectTo: 'inicio', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }