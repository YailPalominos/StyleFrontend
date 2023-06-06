import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../Interfaz/usuario';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Accion } from '../../Interfaz/Accion';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Batalla } from '../../Interfaz/batalla';
import { BatallaService } from '../../Servicio/batalla.service';
@Component({
  selector: 'app-form-batalla',
  templateUrl: './form-batalla.component.html',
  styleUrls: ['./form-batalla.component.scss']
})
export class FormBatallaComponent {

  public Formulario!:FormGroup;


  public OpcionesUsuarios:Usuario[]=[];

  public OpcionesUsuariosSeleccionados:Usuario[]=[];

  public AccionFormulario:string="";
  public AccionFormularioBoton:string="";

  constructor(private oFormBuilder:FormBuilder,public dialogRef: MatDialogRef<FormBatallaComponent>,@Inject(MAT_DIALOG_DATA) 
  public data: any,private oSUsuario:UsuarioService,private Dialog: MatDialog,
  private oSBatalla:BatallaService,) {}


  ngOnInit():void{
    this.IniciarFormulario();

    if(this.data.Id==Accion.Registrar){
      this.AccionFormulario="Registrando Batalla"
      this.AccionFormularioBoton="Guardar"
    }

    this.ObtenerCatalogos()
    
  }



  public CerrarFormulario() {
    this.dialogRef.close();
  }

  public Comprobar(){
    if(this.data.Id==Accion.Registrar){
      this.Guardar();
    }

  }

  public Guardar(){
    this.CerrarFormulario()
    if(this.Formulario.invalid){
      throw new Error("Formulario invalido");
    }else{
      let oBatalla:Batalla= this.Formulario.getRawValue();

      oBatalla.torneo=this.data.Torneo;


      this.oSBatalla.insert(oBatalla).pipe().subscribe({next:()=>
        window.location.reload()
      }
      
      )
    }


  }


  private IniciarFormulario(){

    this.Formulario= this.oFormBuilder.group({
      f1:['',Validators.required],
      f2:['',Validators.required],
      replicas:['',Validators.required],
      ganador:['',Validators.required],
    })
  }

  public QuitarUsuario(nId:number){


    console.log("Id usuario: " ,nId)
  
    this.OpcionesUsuariosSeleccionados.push(this.OpcionesUsuarios[this.OpcionesUsuarios.findIndex(elemento=>elemento.id==nId)])
  
  
  }



  private ObtenerCatalogos() {

    this.oSUsuario.getAll().subscribe((oRespuesta:any)=>{
      this.OpcionesUsuarios =oRespuesta
    });

  }


}
