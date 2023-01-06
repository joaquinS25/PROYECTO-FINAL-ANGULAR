import { Component } from '@angular/core';
import { Cursos } from 'src/app/models/cursos.models';

@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.component.html',
  styleUrls: ['./pagina-cursos.component.scss']
})
export class PaginaCursosComponent {
  students: Cursos[] = [
    new Cursos(1,"Fundamentos de algoritmos","Jorge Bojorquez"),
    new Cursos(2,"Calidad y pruebas de software","Luis Miguel"),
    new Cursos(3,"Videjuegos y aplicacione smoviles","Jorge Narvaez"),
    new Cursos(4,"Redes 2","Augusto Vigilio"),  
  ]

  displayedColumns = ['id','nombre','profesor','editar','eliminar']

  constructor(private readonly dialogService: MatDialog){}

  addStudent(){
   const dialog = this.dialogService.open(StudentDialogComponent)

   dialog.afterClosed().subscribe((value) =>{
    if (value){
      const lastId = this.students[this.students.length - 1]?.id;
      this.students = [...this.students, new Student(lastId+1, value.nombre, value.apellido, value.nota, true)];
    }
   })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  editStudent(student: Student){
    const dialog = this.dialogService.open(StudentDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) =>{
      if (data){
        this.students = this.students.map((stu) => stu.id === student.id?{...stu, ...data}:stu)
      }
    })
  }
}
