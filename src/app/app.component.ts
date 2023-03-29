import { Component } from '@angular/core';

export interface Metodo {
  proceso: string;
  llegada:number;
  duracion:number;
}

const elementos: Metodo[] = [
  {proceso: 'P1', llegada: 0, duracion: 0},
  {proceso: 'P2', llegada: 2, duracion: 7},
  {proceso: 'P3', llegada: 4, duracion: 22},
  {proceso: 'P4', llegada: 5, duracion: 34},
  {proceso: 'P5', llegada: 5, duracion: 38},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Style';
  respuesta:string='';
  
  displayedColumns: string[] = ['proceso', 'llegada', 'duracion'];
  dataSource = elementos;

  numeross:number[]=[];
  public Calcular(){
sadasdasdasd

    for (let i=0;i<this.dataSource.length; i++) { 
      this.numeross.push(this.dataSource[i].duracion)

      this.numeross[i]=this.dataSource[i].llegada- this.dataSource[i].duracion;
      this.numeross[i]=this.dataSource[i].llegada*(1);

    }



  
    let Suma=0;
    let Operacion='(';

    for (let i=0;i<this.numeros.length; i++) { 

      Suma= Suma+this.numeros[i];
      Operacion= ''+Operacion+this.numeros[i]+',';
      console.log(this.numeros[i]);

      if(i==this.numeros.length-1){
        Operacion=Operacion+')';
      }

    }
    console.log(Suma)
    
    this.respuesta=Operacion +'/'+elementos.length+'='+(Suma/elementos.length)
    
    
  }

  public datosTabla():number[] {
    //La grafica ejecuta la funcion desde su componente para obtener la respuesta

    return this.numeros;
}





















































































































































































  numeros:number[]=[4,32,20,0,11];
}


