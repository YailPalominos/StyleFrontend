import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.scss']
})
export class DialogoConfirmacionComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogoConfirmacionComponent>
  ) {}

  Listo() {
    this.dialogRef.close(true);
  }

}
