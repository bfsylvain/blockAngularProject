import { Pipe, PipeTransform } from '@angular/core';
import { Address } from './models/classes/address.class';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: Address): string {
    let fullAddress: string = '';
    for (let [_, val] of Object.entries(value)) {
      fullAddress ? fullAddress +=` ${val}` : fullAddress+= `${val},`;

    }

    return fullAddress;
  }
}
