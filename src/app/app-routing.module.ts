import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'archivo', pathMatch: 'full' },
      // { 
      //   path: 'seguridad', 
      //   loadChildren: 'app/modulos/seguridad/seguridad.module#SeguridadModule', 
      //   // outlet: 'login'
      // },
      {
        path: 'archivo',
        loadChildren: 'app/modulos/archivo/archivo.module#ArchivoModule'
      },
      // new AuxRoute({path: '/route1', component: Route1Component, as: 'Route1'}),
      { path: '**', redirectTo: 'archivo'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
