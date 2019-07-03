import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {ListCoursesComponent} from './list-courses/list-courses.component'
import {EditCoursesComponent} from './edit-courses/edit-courses.component'

const routes: Routes =[
  {path:'',pathMatch:"full",redirectTo:"/dashBoard"},
  {path:'dashBoard',component:DashBoardComponent},
  {path:'listCourses',component:ListCoursesComponent},
  {path:'editCourse',component:EditCoursesComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
