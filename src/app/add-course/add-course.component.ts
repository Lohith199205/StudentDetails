import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  courseData: FormGroup;
  diaplayVariable : "none";
  submitted:boolean = false;
  constructor(private fb : FormBuilder,private service:AdminDashboardService) { }

  ngOnInit() {
    this.courseData = this.fb.group({
      courseName:['',[Validators.required, Validators.minLength(5)] ],
      courseTitle:['',[Validators.required, Validators.minLength(5)]],
      courseMetaTag:['',[Validators.required, Validators.minLength(5)]],
      courseMetaDescription:['',[Validators.required, Validators.minLength(5)]],
      courseOverview:['',[Validators.required, Validators.minLength(5)]]
    });
  }
  get f() { return this.courseData.controls; }

  storeData(){
   this.submitted=true;

    if(this.courseData.valid)
    {
      console.log(this.courseData.value);
     // this.service.postData(this.courseData.value);
    }else{
      console.log("Please enter valid form data"+this.f.courseName.invalid+"  "+this.submitted+"   "+this.f.courseName.errors.required);
    }
    
  }

}
