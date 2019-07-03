import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';

const root: Routes =[
  {path:'',pathMatch:"full",redirectTo:"/dashBoard"},
  {path:'dashBoard',component:DashBoardComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(root),
    DashBoardRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class DashBoardRoutingModule { }
