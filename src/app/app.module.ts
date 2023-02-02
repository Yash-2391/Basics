import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './myComp/post/post.component';
import { EmployeeComponent } from './myComp/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EmployeeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
