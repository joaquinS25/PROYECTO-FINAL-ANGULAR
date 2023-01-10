import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCursosComponent } from './pages/pagina-cursos/pagina-cursos.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'estudiantes',
        component: StudentsPageComponent
      },
      {
        path: 'cursos',
        component: PaginaCursosComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
