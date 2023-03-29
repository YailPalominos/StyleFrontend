import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
 import { ChartDataset, ChartType } from 'chart.js';
// import {  Label } from 'ng2-charts';
// import {DataLabelsPlugin} from 'chartjs-plugin-datalabels';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';




@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.scss']
})
export class GraficaBarrasComponent {

  title = 'ng2-charts-demo';


  barChartLegend = true;
  barChartPlugins = [ChartDataLabels];

public barChartType: ChartType = 'bar';



  barChartData: any[] = [
    { data: [4, 32, 20,0,11], label:'Grafica', axis: 'y',     fill: false,
    backgroundColor: ['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,0)','rgb(0,255,255)','rgb(255,0,255)'] },
  ];

  barChartLabels: any[] = ['P1', 'P2', 'P3', 'P4', 'P5'];



  // public barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: [ 'BYPP', 'RVLI', 'AVGZ', 'ALDT', 'MIXF', 'FVGL' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Incidentes' }
  //     // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  // lineChartOptions = {
  //   responsive: true,
  // };


    // public options: any = {
    //   responsive: true,
    //   plugins: {
    //     datalabels: {
    //       color: 'white',
    //       display: false,
    //       font: {
    //         weight: 'bold'
    //       },
    //       formatter: Math.round
    //     }
    //   },

    // return <Doughnut options={options} data={data}></Doughnut>
  
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    
    responsive: true,
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
  

  

  constructor() {
  }


  // Para emitir eventos atraves de componentes

  @Input() cambio? :any;

  @Output() aInformacion= new EventEmitter<any>();


  public emitirCambio(){
    this.cambio='Hola como estas';
    this.aInformacion.emit(this.cambio);
  }

}

// 6
// 5.75



