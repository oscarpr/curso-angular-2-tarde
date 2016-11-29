import { RouterModule, Routes } from '@angular/router';
import { ComponenteCompeticiones } from './competiciones.componente';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'tabla-posiciones', component: ComponenteCompeticiones }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [ComponenteCompeticiones]
})
export class ModuloCompeticones { }