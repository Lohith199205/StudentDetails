import { Component } from '@angular/core';
import { AdminDashboardService } from './admin-dashboard.service';
import {AddColourDirective} from './Directive/add-colour.directive';
//import {select,NgRedux} from 'ng2-redux';
import {Observable,of} from 'rxjs';
import { IAppState } from './Store/store';
import { Decrement, Increment } from './actions/actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 //@select() counter : Observable<IAppState>

  title:any = 'lohith';

 obser:any = new Observable((observer)=>{
   observer.next("hai");
   observer.next("hai1");
   observer.next("hai2");
})

objectBind = {
  name:"lohith",
}

obser1:any = of(1,2,3,4);

  constructor(private service:AdminDashboardService){
    this.service.postData("");
  }

 
  // Increment(){
  //   this.ngRedux.dispatch({type:Increment});
  // }

  // Decrement(){
  //   this.ngRedux.dispatch({type:Decrement});
  // }
   addClass(data){

  }

}
