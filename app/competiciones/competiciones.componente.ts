import { ServicioHttp } from './../http.servicio';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'competiciones',
    templateUrl: '/app/competiciones/competiciones.template.html'
})
export class ComponenteCompeticiones implements OnInit {
    competencias: Array<Object>;

    constructor(private http: ServicioHttp) { }

    ngOnInit() {
        this.http.obtenerCompetencias().subscribe(
            dato => this.competencias = dato,
            err => console.log(err)
        );
    }

}
