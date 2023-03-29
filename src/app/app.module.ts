import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelUsuariosComponent } from './Principal/Configuracion/panel-usuarios/panel-usuarios.component';
import { BarraSuperiorComponent } from './Principal/MenuSuperior/barra-superior/barra-superior.component';
import { MaterialModule } from './Principal/Recursos/material/material.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaGenericaComponent } from './Principal/Recursos/tabla-generica/tabla-generica.component';
import { MenuLateralComponent } from './Principal/MenuLateral/menu-lateral/menu-lateral.component';
import { GraficaBarrasComponent } from './Principal/Recursos/grafica-barras/grafica-barras.component';
import { NgChartsModule } from 'ng2-charts';
import { InicioComponent } from './Principal/Paginas/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelUsuariosComponent,
    BarraSuperiorComponent,
    TablaGenericaComponent,
    MenuLateralComponent,
    GraficaBarrasComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
