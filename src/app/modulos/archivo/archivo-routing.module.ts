import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivosComponent } from './componentes';
const routes: Routes = [

  { path: '', redirectTo: 'archivos', pathMatch: 'full' },
  { path: 'archivos', component: ArchivosComponent },
  { path: '**', redirectTo: 'archivos'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivoRoutingModule { }
