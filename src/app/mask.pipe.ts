import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxLength: any = 4): any {
    if(value.length > maxLength) {
      return value.substring(0, maxLength) + '***';
    }
    return value;
  }

}
