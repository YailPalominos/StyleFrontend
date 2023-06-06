import {Component} from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Usuario } from '../../Interfaz/usuario';
import { UsuarioService } from '../../Servicio/usuario.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';
import { Accion } from '../../Interfaz/Accion';


@Component({
  selector: 'app-panel-usuarios',
  templateUrl: './panel-usuarios.component.html',
  styleUrls: ['./panel-usuarios.component.scss']
})
export class PanelUsuariosComponent {
  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'nombreUsuario','correoElectronico'];
  dataSource!: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private Dialog: MatDialog,private oSUsuario:UsuarioService) {
  
    this.oSUsuario.getAll().subscribe((oRespuesta:any)=>{
      this.dataSource = new MatTableDataSource<Usuario>(oRespuesta);
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

    const dialogRef = this.Dialog.open(FormUsuarioComponent, {
      width: '850px',
      data: {Id: nId}
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
    }

  }


