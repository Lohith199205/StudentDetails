import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-test',
  templateUrl: './ng-container-test.component.html',
  styleUrls: ['./ng-container-test.component.scss']
})
export class NgContainerTestComponent {

  enable:boolean = false;
  listData:any = [1,2,3,4,5];  

}
