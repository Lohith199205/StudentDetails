import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table'
import { Employee } from '../Model/employee';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'username',
    'password',
  ];


 
//dataSource = new MatTableDataSource(this.EmpData);

dataSource:any;

  constructor(private service:AdminDashboardService) {
    
   }

  @ViewChild('paginator') paginator: MatPaginator;

  ngOnInit() {
    //this.dataSource =
     this.service.postData("").subscribe((response)=>{
      this.dataSource =new MatTableDataSource(JSON.parse(JSON.stringify(response)));
      this.dataSource.paginator = this.paginator;
     })
  }
  ngAfterViewInit():void{
   
  }

}
