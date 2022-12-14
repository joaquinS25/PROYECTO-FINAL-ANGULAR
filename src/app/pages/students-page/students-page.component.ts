import { Component } from '@angular/core';
import { Student } from 'src/app/models/students.models';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  students: Student[] = [
    new Student(1,"Joaquin","Salas",20,true),
    new Student(2,"Christian","Leon",12,true),
    new Student(3,"Jairo","Cornejo",12,true),
    new Student(4,"Sebastian","Cervantes",12,true),  
  ]

  displayedColumns = ['id','nombre','apellido','nota','esActivo','editar','eliminar']
}
