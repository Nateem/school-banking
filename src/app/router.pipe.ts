import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'router'
})
export class RouterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => item.data.hide === false);
  }

}