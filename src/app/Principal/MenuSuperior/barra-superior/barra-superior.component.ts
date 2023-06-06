import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormVotacionComponent } from '../../Paginas/form-votacion/form-votacion.component';


@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent {

  constructor(private router: Router,private Dialog: MatDialog) {
  }

  IrAInicio() {
    this.router.navigate(['/', 'Inicio']);
  }
  IrAUsuarios() {
    this.router.navigate(['/', 'Usuarios']);
  }
  IrTorneos() {
    this.router.navigate(['/', 'Torneos']);
  }
  IrAVotar() {
    const dialogRef = this.Dialog.open(FormVotacionComponent, {
      width: '850px',
      data: {Id: 0}
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
    }

  
  

  VerNotificaciones(){
    
  }

}
