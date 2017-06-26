import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment'; 7
import { Ususu } from '../../modulos/seguridad/modelos';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  public environment = environment;
  @Input() private usuario: Ususu = new Ususu();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('Cambios: ');
    // console.log(changes);
    // console.log(this.usuario);    
  }

  public cerrarSesion() {
    localStorage.removeItem(environment.currentuser);
    location.reload();
  }
}
