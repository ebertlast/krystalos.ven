import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ususu } from '../../modulos/seguridad/modelos';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() private usuario: Ususu = new Ususu();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {    
  }

}
