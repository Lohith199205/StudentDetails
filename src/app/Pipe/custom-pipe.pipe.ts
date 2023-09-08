import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    console.log('pipe',value,...args);
    return value*2;
  }

}
