import { Injectable } from '@angular/core';
import { Helper } from '../../../helpers/helper';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Ususu, Cia } from '../modelos';
import { environment } from '../../../../environments/environment';
@Injectable()
export class AutenticacionService {
  private usuario: Ususu = new Ususu();
  constructor(
    private _http: Http,
    private _helper: Helper
  ) {
    if (localStorage.getItem(environment.currentuser) !== null) {
      const currentUser = JSON.parse(localStorage.getItem(environment.currentuser))['usuario'];
      this.setUsuario(currentUser);
    }
  }
  public setUsuario(_usuario: Ususu) { this.usuario = _usuario; }
  public getUsuario(): Ususu { return this.usuario; }
  public extractData(res: Response, displayerror: boolean = true) {
    const body = res.json();
    // console.log('Extract Data:');
    // console.log(body);
    // Actualizar token
    if (body.response === false) {
      this._helper.notificacion(body.message || body.statusText, body.statusText || 'Error', 'error');
    }
    if (body.token !== null) {
      this.usuario.TOKEN = body.token;
    }

    this.usuario.TOKEN = (typeof (body.token) === 'undefined') ? '' : body.token;

    // console.log(this.usuario);

    return body.result || {};
  }
  public handleError(error: Response | any) {
    let errMsg: string;
    console.log('Pruebas de Desarrollo');
    console.log(error);
    if (!error.ok) {
      errMsg = (error._body.message) ? error._body.message : '';
      if (error instanceof Response) {
        let body: any = '';
        try {
          body = error.json();
        } catch (e) {
          body = '';
        }
        const err = body.error || JSON.stringify(body);
        //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      this._helper.notificacion(errMsg, error.statusText, 'error');
    }

    return Observable.throw(errMsg);
  }
  public login(compania: Cia, usuario: string, clave: string): Observable<boolean> {
    const json = JSON.stringify({
      compania: compania.COMPANIA, servidor: compania.SERVIDOR_DBBASE,
      dbbase: compania.DB_BASE, usuario: usuario, clave: clave
    });
    // console.log(json);
    const params = 'json=' + json;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    // console.log(params);
    
    return this._http.post(environment.apiurl + '/ususu/autenticar', params, { headers: headers })
      .map(
      (response: Response) => {
        // console.log(response.json());
        const userData: Ususu = this.extractData(response);
        // console.log(userData.NOMBRE);
        if (typeof (userData.NOMBRE) !== 'undefined') {
          this._helper.revisarAvatarDeUsuario(userData);
          this.setUsuario(userData);
          localStorage.setItem(environment.currentuser, JSON.stringify({ usuario: this.usuario }));
          // console.log(this.usuario);
          return true;
        }
        // console.log(usuario);

        return false;
      }
      )
      .catch(err => this.handleError(err))
      ;

  }
}
