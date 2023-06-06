import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './Principal/MenuSuperior/barra-superior/barra-superior.component';
import { MaterialModule } from './Principal/Recursos/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficaBarrasComponent } from './Principal/Recursos/grafica-barras/grafica-barras.component';
import { NgChartsModule } from 'ng2-charts';
import { InicioComponent } from './Principal/Paginas/inicio/inicio.component';
import { FormTorneoComponent } from './Principal/Paginas/form-torneo/form-torneo.component';
import { HttpClientModule } from "@angular/common/http";
import { FormUsuarioComponent } from './Principal/Paginas/form-usuario/form-usuario.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Principal/Paginas/login/login.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PanelUsuariosComponent } from './Principal/Paginas/panel-usuarios/panel-usuarios.component';
import { PanelTorneosComponent } from './Principal/Paginas/panel-torneos/panel-torneos.component';
import { DialogoConfirmacionComponent } from './Principal/Recursos/dialogo-confirmacion/dialogo-confirmacion.component';
import { PanelVotacionComponent } from './Principal/Paginas/panel-votacion/panel-votacion.component';
import { FormVotacionComponent } from './Principal/Paginas/form-votacion/form-votacion.component';
import { FormBatallaComponent } from './Principal/Paginas/form-batalla/form-batalla.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    GraficaBarrasComponent,
    InicioComponent,
    FormTorneoComponent,
    FormUsuarioComponent,
    LoginComponent,
    PanelUsuariosComponent,
    PanelTorneosComponent,
    DialogoConfirmacionComponent,
    PanelVotacionComponent,
    FormVotacionComponent,
    FormBatallaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
