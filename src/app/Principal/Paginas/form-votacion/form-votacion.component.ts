import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Torneo } from '../../Interfaz/torneo';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TorneoService } from '../../Servicio/torneo.service';
import { VotacionService } from '../../Servicio/votacion.service';
import { Votacion } from '../../Interfaz/votacion';
import { Accion } from '../../Interfaz/Accion';

@Component({
  selector: 'app-form-votacion',
  templateUrl: './form-votacion.component.html',
  styleUrls: ['./form-votacion.component.scss']
})
export class FormVotacionComponent {

  public Formulario!: FormGroup;
  public AccionFormulario: string = "";
  public AccionFormularioBoton: string = "";
  public OpcionesTorneos: Torneo[] = []

  public Total: number =0;

  constructor(
    private oFormBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<FormVotacionComponent>, @Inject(MAT_DIALOG_DATA) 
    public data: any, 
    private oSTorneo: TorneoService, private Dialog: MatDialog,private oSVotacion:VotacionService) { }


    ngOnInit(): void {
      this.IniciarFormulario();
  
      if (this.data.Id == Accion.Registrar) {
        this.AccionFormulario = "Registrando Votación"
        this.AccionFormularioBoton = "Guardar"
      } else {
        this.AccionFormulario = "Modificando Votación"
        this.AccionFormularioBoton = "Modificar"
        this.Cargar(this.data.Id)
      }
  
          
      this.ObtenerCatalogos()
    }
  
    private ObtenerCatalogos() {
  
  
  
    }
  
  
  
    public Cargar(nId: number) {
      this.oSTorneo.getOne(nId).subscribe((oRespuesta: any) => {
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
        // this.Modificar();
      }
  
    }
  


  
    public Guardar() {
      this.CerrarFormulario()
      if (this.Formulario.invalid) {
        throw new Error("Formulario invalido");
      } else {
        let oVotacion: Votacion = this.Formulario.getRawValue();
  



        // oVotacion.registroUsuario = 1;
        // oVotacion.registroFecha = new Date()

  
        // this.oSVotacion.insert(oVotacion).pipe().subscribe({
        //   next: () =>
        //     window.location.reload()
        // }
  
        // )
      }
  
  
    }


    // public Modificar() {
  
    //   if (this.Formulario.invalid) {
    //     throw new Error("Formulario invalido");
    //   } else {
    //     let oVotacion: Votacion = this.Formulario.getRawValue();
  
    //     oVotacion.id = this.data.Id;
  
    //     this.oSVotacion.update(oVotacion).pipe().subscribe({
    //       next: () =>
    //         window.location.reload()
  
    //     }
    //     )
  
  
    //   }
  
  
    // }
  

    public VerTotal(){

      this.Total=this.Formulario.controls['p1'].value+this.Formulario.controls['p2'].value+this.Formulario.controls['p3'].value+
      this.Formulario.controls['p4'].value+this.Formulario.controls['p5'].value+this.Formulario.controls['p6'].value+
      this.Formulario.controls['flow'].value+this.Formulario.controls['pEcena'].value+this.Formulario.controls['tecnicas'].value;
    }

    private IniciarFormulario() {
  
      this.Formulario = this.oFormBuilder.group({
  
        p1: ['', [Validators.required,Validators.min(0),Validators.max(4)]],
        p2:['', [Validators.required,Validators.min(0),Validators.max(4)]],
        p3:['', [Validators.required,Validators.min(0),Validators.max(4)]],
        p4: ['', [Validators.required,Validators.min(0),Validators.max(4)]],
        p5:['', [Validators.required,Validators.min(0),Validators.max(4)]],
        p6: ['', [Validators.required,Validators.min(0),Validators.max(4)]],

        flow: ['', [Validators.required,Validators.min(0),Validators.max(2)]],
        pEcena: ['', [Validators.required,Validators.min(0),Validators.max(2)]],
        tecnicas: ['', [Validators.required,Validators.min(0),Validators.max(2)]],

  
      })
    }
  
  


}
