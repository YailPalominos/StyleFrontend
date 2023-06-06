import { Component ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Torneo } from '../../Interfaz/torneo';
import { MatDialog } from '@angular/material/dialog';
import { TorneoService } from '../../Servicio/torneo.service';
import { FormTorneoComponent } from '../form-torneo/form-torneo.component';

export interface Opciones {
  valor: string,
  texto:string;
}

@Component({
  selector: 'app-panel-torneos',
  templateUrl: './panel-torneos.component.html',
  styleUrls: ['./panel-torneos.component.scss']
})
export class PanelTorneosComponent {

  displayedColumns: string[] = ['id','usuarios', 'nombre', 'tipo', 'uso','acomodo','estado'];
  dataSource!: MatTableDataSource<Torneo>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public OpcionesEstados:Opciones[]=[
    {valor:'R',texto:'Registrando'},
    {valor:'C',texto:'Compitiendo'},
    {valor:'F',texto:'Finalizando'},
  ]

  public OpcionesTipo:Opciones[]=[
    {valor:'D',texto:'Diagrama'},
    {valor:'P',texto:'Puntos'},
  ]

  public OpcionesUso:Opciones[]=[
    {valor:'PR',texto:'Privado'},
    {valor:'PU',texto:'Publico'},
  ]

  public OpcionesAcomodo:Opciones[]=[
    {valor:'A',texto:'Aleatorio'},
    {valor:'EA',texto:'Eleccion aleatoria'},
    {valor:'SA',texto:'Selección aleatoria'},
    {valor:'S',texto:'Selección'},
  ]

  constructor(private Dialog: MatDialog,private oSTorneo:TorneoService) { 
    this.oSTorneo.getAll().subscribe((oRespuesta:any)=>{

      let Torneos:Torneo[]=oRespuesta;

      for (let i=0; i < Torneos.length; i++){
    
        Torneos[i].tipo= ''+this.OpcionesTipo.find(x=>x.valor==Torneos[i].tipo)?.texto;
        Torneos[i].uso= ''+this.OpcionesUso.find(x=>x.valor==Torneos[i].uso)?.texto;
        Torneos[i].acomodo= ''+this.OpcionesAcomodo.find(x=>x.valor==Torneos[i].acomodo)?.texto;
        Torneos[i].estado= ''+this.OpcionesEstados.find(x=>x.valor==Torneos[i].estado)?.texto;

        Torneos[i].usuarios= (Torneos[i].usuarios=='')?'Sin usuarios':Torneos[i].usuarios;
      }

      this.dataSource = new MatTableDataSource<Torneo>(Torneos);
      this.dataSource.paginator = this.paginator;
    });

  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  public RegistraOEditar(nId?:number){

    if(nId==null){
      nId=0;
    }

    const dialogRef = this.Dialog.open(FormTorneoComponent, {
      width: '850px',
      data: {Id: nId}
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
    }

  }


