import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  
  constructor(private fb : FormBuilder,private service:AdminDashboardService) { }

  courseData = this.fb.group({
    courseName:['',[Validators.required, Validators.minLength(5)] ],
    courseTitle:['',[Validators.required, Validators.minLength(5)]],
    courseMetaTag:['',[Validators.required, Validators.minLength(5)]],
    courseMetaDescription:['',[Validators.required, Validators.minLength(5)]],
    courseOverview:['',[Validators.required, Validators.minLength(5)]]
  });

  ngOnInit() {
  }

  storeData(){
    if(this.courseData.valid)
    {
      console.log(this.courseData.value);
     // this.service.postData(this.courseData.value);
    }else{
      console.log("Please enter valid form data");
    }
    
  }

}
