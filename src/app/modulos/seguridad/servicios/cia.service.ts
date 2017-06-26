import { Injectable } from '@angular/core';
import { Cia } from '../modelos';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Injectable()
export class CiaService {

  constructor(
    private _http: Http,
    private _autenticacionService: AutenticacionService
  ) { }

  get(compania: string = ''): Observable<Cia[]> {
    return this._http.get(environment.apiurl + '/cia/companias/' + compania)
      .map((response: Response) => {
        // console.log(response.json());
        return response.json().result;
      })
      .catch(err => this._autenticacionService.handleError(err))
      ;
  }

}
