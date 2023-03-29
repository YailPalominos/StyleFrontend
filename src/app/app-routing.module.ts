import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelUsuariosComponent } from './Principal/Configuracion/panel-usuarios/panel-usuarios.component';
import { InicioComponent } from './Principal/Paginas/inicio/inicio.component';

const routes: Routes = [

{path:'Inicio',component:InicioComponent},
{path:'Usuarios',component:PanelUsuariosComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
