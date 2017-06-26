import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArchivoRoutingModule } from './archivo-routing.module';
import { ArchivosComponent } from './componentes/archivos/archivos.component';
import { ArchivosService } from './servicios/archivos.service';

@NgModule({
  imports: [
    CommonModule,
    ArchivoRoutingModule,
    FormsModule
  ],
  exports: [
    ArchivosComponent
  ],
  declarations: [ArchivosComponent],
  providers: [ArchivosService]
})
export class ArchivoModule { }
