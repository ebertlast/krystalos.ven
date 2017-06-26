import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarComponent } from './componentes';

const routes: Routes = [
  { path: '', redirectTo: 'ingresar', pathMatch: 'full'},
  { path: 'ingresar', component: IngresarComponent },
  { path: '**', redirectTo: 'ingresar'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
