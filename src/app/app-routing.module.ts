import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Principal/Paginas/inicio/inicio.component';
import { PanelUsuariosComponent } from './Principal/Paginas/panel-usuarios/panel-usuarios.component';
import { PanelTorneosComponent } from './Principal/Paginas/panel-torneos/panel-torneos.component';
import { PanelVotacionComponent } from './Principal/Paginas/panel-votacion/panel-votacion.component';

const routes: Routes = [

{path:'Inicio',component:InicioComponent},
{path:'Usuarios',component:PanelUsuariosComponent},
{path:'Torneos',component:PanelTorneosComponent},
{path:'Votaciones',component:PanelVotacionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
