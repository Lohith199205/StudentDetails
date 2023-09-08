import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
   username:any='lohith';
   password:any='lohith';
   url:any = "http://localhost:8080/"

  constructor(private http:HttpClient) {


   }

  getData(data){

    const requestOptions ={ headers: { authorization: this.createBasicAuthToken(this.username, this.password)},responseType:"text"};
    this.http.get(this.url,{
      headers:{authorization: this.createBasicAuthToken(this.username, this.password)},
      responseType:"text"}
    ).subscribe((resp)=>{
      console.log(resp);
    })

  }

  postData(data){

   return this.http.post(this.url+"addData",{
      "username" : "lohith",
      "password" : "lo"
  },{
      headers:{authorization: this.createBasicAuthToken(this.username, this.password)}}
    )
    // .subscribe((resp)=>{
    //   console.log(resp);
    // })

  }


  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
}
