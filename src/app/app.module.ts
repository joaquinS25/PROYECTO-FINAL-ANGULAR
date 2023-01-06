import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { PaginaCursosComponent } from './pages/pagina-cursos/pagina-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    FooterComponent,
    PaginaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
