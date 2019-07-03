import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { DescCoursesComponent } from './desc-courses/desc-courses.component';
import {OrganisationDetailsComponent} from './organisation-details/organisation-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import {AdminDashboardService} from './admin-dashboard.service'

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    EditCoursesComponent,
    DescCoursesComponent,
    OrganisationDetailsComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
