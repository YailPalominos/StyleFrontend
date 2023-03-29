import { Component, Input , EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  showFiller = true;

  bBarraLateral:boolean=false; // Visible o invisible

  @ViewChild(MatDrawer) menuLateral!: MatDrawer;


  public MostrarOcultarBarraLateral(){
    
    if(this.bBarraLateral){
    console.log('Se muestra la barra');
    }else{
      console.log('Se oculta');
    }
    this.menuLateral.toggle()
  }
 
  

}
