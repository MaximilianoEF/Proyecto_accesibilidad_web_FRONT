import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ConsultarWebComponent } from './consultar-web.component';
import { ListResultadoComponent } from './list-resultado/list-resultado.component';
import { ConsultarWebRoutingModule } from './consultar-web-routing.module';



@NgModule({
  declarations: [
    ConsultarWebComponent,
    ListResultadoComponent
  ],
  imports: [
    CommonModule,
    ConsultarWebRoutingModule,
    SharedModule
  ]
})
export class ConsultarWebModule { }