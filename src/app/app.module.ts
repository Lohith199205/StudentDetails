import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';




@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ListCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
