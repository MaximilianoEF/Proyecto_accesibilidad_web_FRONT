import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "../inicio/inicio.component";
import { ConsultarWebComponent } from "./consultar-web/consultar-web.component";
import { DashboardComponent } from "./dashboard.component";
import { ListResultadoComponent } from "./list-resultado/list-resultado.component";

const routes: Routes = [{
    path: '', component: DashboardComponent, children: [
        {
            path:'', component: InicioComponent
        }, {
            path:'consultar-web', component: ConsultarWebComponent
        }, {
            path:'list-resultado', component: ListResultadoComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }