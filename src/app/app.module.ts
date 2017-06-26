import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Helper } from './helpers';

// Módulos
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { ArchivoModule } from './modulos/archivo/archivo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadRoutingModule } from './modulos/seguridad/seguridad-routing.module';
import { ArchivoRoutingModule } from './modulos/archivo/archivo-routing.module';
import { NavbarComponent } from './secciones/navbar/navbar.component';
import { SidebarComponent } from './secciones/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadRoutingModule,
    SeguridadModule, ArchivoModule,
    ArchivoRoutingModule,
    HttpModule
  ],
  providers: [Helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
