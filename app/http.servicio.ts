import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ServicioHttp {
    baseURL: string = 'http://api.football-data.org';
    apiKey: string = '23cada21bd8948feaaa690fb65ee765a';
    header: Headers;

    constructor(private http: Http) {
        this.header = new Headers();
        this.header.append('X-Auth-Token', this.apiKey);
    }

    obtenerCompetencias() {
        return this.http.get(this.baseURL + '/v1/competitions/', { headers: this.header }).map(res => res.json())
    }

}
