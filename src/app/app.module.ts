import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgReduxModule,NgRedux} from 'ng2-redux';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { EditCoursesComponent } from './edit-courses/edit-courses.component';
import { DescCoursesComponent } from './desc-courses/desc-courses.component';
import {OrganisationDetailsComponent} from './organisation-details/organisation-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { HttpClientModule } from '@angular/common/http';
import {AdminDashboardService} from './admin-dashboard.service';
import { AddColourDirective } from './Directive/add-colour.directive';
import { CustomPipePipe } from './Pipe/custom-pipe.pipe';
import { NgContainerTestComponent } from './ng-container-test/ng-container-test.component'
import { IAppState } from './Store/store';

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    EditCoursesComponent,
    DescCoursesComponent,
    OrganisationDetailsComponent,
    AddCourseComponent,
    AddColourDirective,
    CustomPipePipe,
    NgContainerTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [AdminDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  //constructor(private ngRedux:NgRedux<IAppState>){}
 }
