import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TorneoService } from '../../Servicio/torneo.service';
import { Accion } from '../../Interfaz/Accion';
import { Torneo } from '../../Interfaz/torneo';
import { Usuario } from '../../Interfaz/usuario';
import { UsuarioService } from '../../Servicio/usuario.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Batalla } from '../../Interfaz/batalla';
import { BatallaService } from '../../Servicio/batalla.service';
import { FormBatallaComponent } from '../form-batalla/form-batalla.component';

@Component({
  selector: 'app-form-torneo',
  templateUrl: './form-torneo.component.html',
  styleUrls: ['./form-torneo.component.scss']
})
export class FormTorneoComponent {

  public Formulario!: FormGroup;

  public Usuarios:string="";

  public AccionFormulario: string = "";
  public AccionFormularioBoton: string = "";

  public OpcionesUsuarios: Usuario[] = []
  public UsuariosFiltrados!: Observable<Usuario[]>;

  public Batallas:Batalla[]=[]


  constructor(
    private oFormBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<FormTorneoComponent>, @Inject(MAT_DIALOG_DATA) 
    public data: any, 
    private oSTorneo: TorneoService, private Dialog: MatDialog,private oSUsuario:UsuarioService,
    private oSBatalla:BatallaService) { }

    
  ngOnInit(): void {
    this.IniciarFormulario();

    if (this.data.Id == Accion.Registrar) {
      this.AccionFormulario = "Registrando torneo"
      this.AccionFormularioBoton = "Guardar"
    } else {
      this.AccionFormulario = "Modificando torneo"
      this.AccionFormularioBoton = "Modificar"
      this.Cargar(this.data.Id)
    }

    this.UsuariosFiltrados = this.Formulario.controls['usuario'].valueChanges.pipe(
      startWith(''),
      map(value => this.FiltrarUsuarios(value || '')),
    );

    this.ObtenerCatalogos()
  }

  private ObtenerCatalogos() {

    this.oSUsuario.getAll().subscribe((oRespuesta:any)=>{
      this.OpcionesUsuarios =oRespuesta
    });


    this.oSBatalla.getAll().subscribe((oRespuesta:any)=>{
      this.Batallas =oRespuesta
  

      for (let index = 0; index < this.Batallas.length; index++) {
    
      if( this.Batallas[index].torneo!=this.data.Id){
        this.Batallas.splice(index,1);
      }
      
        
      }

    });


  }


  private FiltrarUsuarios(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.OpcionesUsuarios.filter(option => option.nombreUsuario.toLowerCase().includes(filterValue));
  }

  public Cargar(nId: number) {
    this.oSTorneo.getOne(nId).subscribe((oRespuesta: any) => {
      // oRespuesta.usuarios= (oRespuesta.usuarios=='')?'Sin usuarios':oRespuesta.usuarios;
      this.Formulario.patchValue(oRespuesta)
    });
  }

  public CerrarFormulario() {
    this.dialogRef.close();
  }

  public Comprobar() {
    if (this.data.Id == Accion.Registrar) {
      this.Guardar();
    } else {
      this.Modificar();
    }

  }

public GetIdUsuario(sUsuario:string):number{
  return this.OpcionesUsuarios.find(elemento=>elemento.nombreUsuario==sUsuario)?.id??0;
}

public GetUsuario(nId:number):string{
  return this.OpcionesUsuarios.find(elemento=>elemento.id==nId)?.nombreUsuario??"";
}



public AgregarUsuario(){
  // this.Usuarios

  if(this.Formulario.controls['usuario'].value!=null){

    let sCadena=this.Formulario.controls['usuarios'].value
  
    if(sCadena.toString().trim()!=''){
    
      sCadena+=','+this.GetIdUsuario(this.Formulario.controls['usuario'].value)
    

  }else{
    sCadena+=this.GetIdUsuario(this.Formulario.controls['usuario'].value)
  }

// console.log(this.fil.findIndex(elemento=>elemento.id==this.GetIdUsuario(this.Formulario.controls['usuario'].value)))  
 

//     this.OpcionesUsuarios.splice(,1)
    this.Formulario.controls['usuario'].setValue(null)
    this.Formulario.controls['usuarios'].setValue(sCadena);

  }
}

  public Guardar() {
    this.CerrarFormulario()
    if (this.Formulario.invalid) {
      throw new Error("Formulario invalido");
    } else {
      let oTorneo: Torneo = this.Formulario.getRawValue();

      oTorneo.registroUsuario = 1
      oTorneo.fechaRegistro = new Date()
      oTorneo.antecesor = 0

      this.oSTorneo.insert(oTorneo).pipe().subscribe({
        next: () =>
          window.location.reload()
      }

      )
    }


  }
  public Modificar() {

    if (this.Formulario.invalid) {
      throw new Error("Formulario invalido");
    } else {
      let oTorneo: Torneo = this.Formulario.getRawValue();

      oTorneo.id = this.data.Id;

      this.oSTorneo.update(oTorneo).pipe().subscribe({
        next: () =>
          window.location.reload()

      }
      )


    }


  }

  private IniciarFormulario() {

    this.Formulario = this.oFormBuilder.group({

      nombre: ['', Validators.required],
      fechaInicioVigencia: ['', Validators.required],
      fechaFinalVigencia: ['', Validators.required],

      tipo: ['', Validators.required],
      uso: ['', Validators.required],
      acomodo: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],

      usuarios: [],
      registroUsuario: [],
      fechaRegistro: [],
      antecesor: [],

      usuario: ['']

    })
  }

  public CrearBatalla(){


    const dialogRef = this.Dialog.open(FormBatallaComponent, {
      width: '850px',
      data: {Id: 0,
      Torneo:this.data.Id
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    
    });
    }



  

}
