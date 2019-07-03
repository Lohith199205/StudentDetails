import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCoursesComponent} from './list-courses/list-courses.component';
import {EditCoursesComponent} from './edit-courses/edit-courses.component';
import {OrganisationDetailsComponent} from './organisation-details/organisation-details.component';
import {AddCourseComponent} from './add-course/add-course.component';

const routes: Routes =[
  {path:'',pathMatch:"full",redirectTo:"/organisationDetails"},
  {path:'listCourses',component:ListCoursesComponent},
  {path:'editCourse',component:EditCoursesComponent},
  {path:'organisationDetails',component:OrganisationDetailsComponent},
  {path:'addCourse',component:AddCourseComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
