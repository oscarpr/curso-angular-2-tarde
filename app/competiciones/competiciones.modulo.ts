import { ServicioHttp } from './../http.servicio';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteCompeticiones } from './competiciones.componente';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'tabla-posiciones', component: ComponenteCompeticiones }
]


@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    declarations: [ComponenteCompeticiones],
    providers: [ServicioHttp]
})
export class ModuloCompeticones { }