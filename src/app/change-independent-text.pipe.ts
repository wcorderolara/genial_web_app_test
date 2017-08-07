import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeIndependentText'
})
export class ChangeIndependentTextPipe implements PipeTransform {

  transform(text:any): string {
    return text == "true"? 'SI' : 'NO';
  }

}
