import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Ususu } from './modulos/seguridad';
import { AutenticacionService } from './modulos/seguridad/servicios';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = environment.nombreapp;
  private empresa = environment.nombrecompany;
  private licencia = environment.vigencialicencia;
  private facebook = environment.urlfacebook;
  private twitter = environment.urltwitter;
  private usuario: Ususu = new Ususu();
  private logged = false;
  constructor(private _autenticacionService: AutenticacionService) {
    if (this._autenticacionService.getUsuario() !== null) {
      this.setUsuario(this._autenticacionService.getUsuario());
    }
    if (this.getUsuario().NOMBRE !== '') {
      this.logged = true;
    }
  }
  public setUsuario(_usuario: Ususu) {
    this.usuario = _usuario;
  }
  public getUsuario(): Ususu {
    return this.usuario;
  }
  ngOnInit() {
    if (this.usuario.USUARIO === '') {
      $('body').attr('class', 'login-layout');
    } else {
      $('body').attr('class', 'no-skin');
    }
    $('#sidebar').attr('class', 'sidebar responsive sidebar-fixed sidebar-scroll');
    $('#navbar').attr('class', 'navbar navbar-default navbar-fixed-top');
  }
}
