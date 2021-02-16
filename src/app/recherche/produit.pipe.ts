import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'event'
})
export class ProduitPipe implements PipeTransform {

  transform(value: any, term: any[]): any {
    if (term == null) {
      return value ;
    }
  else {
    return value.filter(item => ( item.nom.includes(term)));
  }
  }

}
