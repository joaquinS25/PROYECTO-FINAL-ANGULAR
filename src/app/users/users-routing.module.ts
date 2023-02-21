import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: UsersPageComponent
      }
    ])
  ]
})
export class UsersRoutingModule { }
