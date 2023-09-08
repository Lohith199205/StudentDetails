import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddColour]'
})
export class AddColourDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.backgroundColor = '';
  }

}
