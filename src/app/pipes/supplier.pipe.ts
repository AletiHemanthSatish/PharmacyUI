import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../models/supplier.model';

@Pipe({
  name: 'supplier'
})
export class SupplierPipe implements PipeTransform {
  transform(drugs :Supplier[],filterString:string) {
    if(!drugs||!filterString){
      return drugs;
    }
    return drugs.filter(drug=> drug.supplierName.toLowerCase().indexOf(filterString.toLowerCase())!==-1);
  
  }
}
