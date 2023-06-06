import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import {  ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Usuario } from '../../Interfaz/usuario';


@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.scss']
})
export class GraficaBarrasComponent {

  barChartLegend = true;
  barChartPlugins = [ChartDataLabels];

  public datos:number[]=[0,0,0,0,0];
  public meses:string[]=[];

  public Meses:any=[
    
    {num:1,mes:"Enero",usuarios:0},
    {num:2,mes:"Febrero",usuarios:0},
    {num:3,mes:"Marzo",usuarios:0},
    {num:4,mes:"Abril",usuarios:0},
    {num:5,mes:"Mayo",usuarios:0}]

public barChartType: ChartType = 'bar';

constructor(private oSUsuario:UsuarioService) {}
  
ngOnInit():void{
  this.oSUsuario.getAll().subscribe((oRespuesta:any)=>{
    
    let Usuarios:Usuario[]=oRespuesta;

    for (let i=0; i < Usuarios.length; i++){
    
      let fechaRegistro:Date=new Date(Usuarios[i].fechaRegistro)

      for (let x=0; x < this.Meses.length; x++){

        if(this.Meses[x].num==fechaRegistro.getUTCMonth()+1){
          this.Meses[x].usuarios++;
        }

        this.datos[x]=parseInt(this.Meses[x].usuarios)
        this.meses[x]=(this.Meses[x].mes)
        
      }

      this.barChartData= [{ data: this.datos, label:'Usuarios registrados', axis: 'y',     fill: false,
      backgroundColor: ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(0,255,255)','rgb(255,0,255)'] }]

      this.barChartLabels= this.meses;

    }

  });


  
}



barChartData: any[] = [
  { data: this.datos, label:'Usuarios registrados', axis: 'y',     fill: false,
  backgroundColor: ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(0,255,255)','rgb(255,0,255)'] },
];

barChartLabels: any[] = [];


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    
    responsive: false,
      plugins: {
        datalabels: {
          color: 'white',
          display: true,
          
          font: {
            weight: 'bold'
          },
        
        }
      },
  };
  
}



