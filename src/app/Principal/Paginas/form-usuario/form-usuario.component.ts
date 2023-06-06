import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../Interfaz/usuario';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Accion } from '../../Interfaz/Accion';
import { UsuarioService } from '../../Servicio/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent {

  public Formulario!:FormGroup;
  
  public Oculto1 = true;
  public Oculto2 = true;

  public AccionFormulario:string="";
  public AccionFormularioBoton:string="";

  constructor(private oFormBuilder:FormBuilder,public dialogRef: MatDialogRef<FormUsuarioComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private oSUsuario:UsuarioService,private Dialog: MatDialog) {}

  ngOnInit():void{
    this.IniciarFormulario();

    if(this.data.Id==Accion.Registrar){
      this.AccionFormulario="Registrando usuario"
      this.AccionFormularioBoton="Guardar"
    }else{
      this.AccionFormulario="Modificando usuario"
      this.AccionFormularioBoton="Modificar"
      this.Cargar(this.data.Id)
    }
    
  }

  public Cargar(nId:number){

    this.oSUsuario.getOne(nId).subscribe((oRespuesta:any)=>{
      this.Formulario.patchValue(oRespuesta)
      this.Formulario.controls['confimar'].setValue(oRespuesta.contraseña)
    });
  }

  public CerrarFormulario() {
    this.dialogRef.close();
  }

  public Comprobar(){
    if(this.data.Id==Accion.Registrar){
      this.Guardar();
    }else{
      this.Modificar();
    }

  }

  public Guardar(){
    this.CerrarFormulario()
    if(this.Formulario.invalid){
      throw new Error("Formulario invalido");
    }else{
      let oUsuario:Usuario= this.Formulario.getRawValue();

      oUsuario.amigos='';
      oUsuario.fechaRegistro=new Date();

      this.oSUsuario.insert(oUsuario).pipe().subscribe({next:()=>
        window.location.reload()
      }
      
      )
    }


  }
  public Modificar(){

    if(this.Formulario.invalid){
      throw new Error("Formulario invalido");
    }else{
      let oUsuario:Usuario= this.Formulario.getRawValue();

      oUsuario.id=this.data.Id;

      this.oSUsuario.update(oUsuario).pipe().subscribe({next:()=>
        window.location.reload()
        
      }
      )
    

    }


  }


  private IniciarFormulario(){

    this.Formulario= this.oFormBuilder.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      nombreUsuario:['',Validators.required],
      contraseña:['',[Validators.required]],
      confimar:['',[Validators.required]],
      pais:['',Validators.required],
      fechaNacimiento:['',Validators.required],
      correoElectronico:['',[Validators.required,Validators.email]],
      sexo:['',Validators.required],

    amigos:[],
    fechaRegistro:[]

    })
  }



}
