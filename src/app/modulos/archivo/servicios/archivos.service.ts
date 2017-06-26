import { Injectable } from '@angular/core';
import { AutenticacionService } from '../../seguridad/servicios';
import { environment } from '../../../../environments/environment';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ArchivosService {

  constructor(
    private _autenticacionService: AutenticacionService,
    private _http: Http
  ) { }
  upload (postData: any, files: File[], url: string = environment.apiurl + '/archivos/upload') {
    const headers = new Headers();
    const formData:FormData = new FormData();
    // formData.append('files', files[0], files[0].name);
    // Para multiples subidas
    for (let i = 0; i < files.length; i++) {
        formData.append(`files[]`, files[i], files[i].name);
    }

    if(postData !=="" && postData !== undefined && postData !==null){
      for (var property in postData) {
          if (postData.hasOwnProperty(property)) {
              formData.append(property, postData[property]);
          }
      }
    }
    const returnReponse = new Promise((resolve, reject) => {
      this._http.post(url, formData, {
        headers: headers
      }).subscribe(
          res => {
            // this.responseData = res.json();
            // resolve(this.responseData);
            const data = this._autenticacionService.extractData(res);
            // console.log("Data: ");
            // console.log(data);
            resolve(data);
          },
          error => {
            // this.router.navigate(['/login']);
            // console.log(error);
            this._autenticacionService.handleError(error);
            reject(error);

          }
      );
    });
    return returnReponse;
  }
}
