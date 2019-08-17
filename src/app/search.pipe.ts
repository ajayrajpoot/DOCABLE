import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
   // <table *ngFor="let emp of customerData | search: {column1: searchText, column2:searchText,  colum: searchText}; let i=index;">

   transform(value: any, args?: any): any {
    
            if(!value)return null;
            if(!args)return value;
    
            args = args.toLowerCase();
    
            return value.filter(function(item){
                return JSON.stringify(item).toLowerCase().includes(args);
            });
        }

}
