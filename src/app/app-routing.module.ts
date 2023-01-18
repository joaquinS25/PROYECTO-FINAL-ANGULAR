import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCursosComponent } from './pages/pagina-cursos/pagina-cursos.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren:  () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
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
      },
      {
        path: 'products',
        component: ProductsPageComponent
      }
    ]
  },
  {path: '', redirectTo:'login', pathMatch:'full'},
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
