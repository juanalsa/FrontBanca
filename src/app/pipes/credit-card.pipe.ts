import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform( value: string, activar:boolean = true ): string {
    if ( activar ) {
      let result:string = '';

      for ( let i = 0; i < value.length; i++ ) {
        if ( i <= 11 ) {
          result += 'X';

          if ( (i + 1) % 4 === 0 ) {
            result += ' ';
          }
        } else {
          result += value.charAt(i);
        }
        
      }

      return result;

    } else {
      return value;

    }

  }

}
