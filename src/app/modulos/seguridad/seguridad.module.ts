import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IngresarComponent } from './componentes';
import { AutenticacionService } from './servicios';
import { CiaService } from './servicios/cia.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeguridadRoutingModule,
  ],
  declarations: [IngresarComponent],
  exports: [ IngresarComponent ],
  providers: [AutenticacionService, CiaService]
})
export class SeguridadModule { }
