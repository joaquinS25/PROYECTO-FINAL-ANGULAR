import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class UsersModule { }
