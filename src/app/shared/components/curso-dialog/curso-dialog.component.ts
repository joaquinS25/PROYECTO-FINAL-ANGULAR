import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos.models';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
})
export class CursoDialogComponent {
  nombreControl = new FormControl('')
  profesorControl = new FormControl('')
  cursoForm = new FormGroup({
    nombre: this.nombreControl,
    profesor: this.profesorControl,
  })
  constructor(private readonly dialoRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Cursos | null,
  ) {
    console.log(data);
    if (data) {
      this.cursoForm.patchValue(data)
    }
  }

  close() {
    this.dialoRef.close()
  }
}
