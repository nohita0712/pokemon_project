import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appAbilityFilter' })
export class FilterAbilityPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchAbility search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchAbility: string): any[] {
  
    if (!items) {
      return [];
    }
    if (!searchAbility) {
      return items;
    }
    searchAbility = searchAbility.toString().toLocaleLowerCase();

    return items.filter(it => {
       for(let i in it.abilities){
         return   it.abilities[i].ability.name.toString().toLocaleLowerCase().includes(searchAbility);
       }
    });
  }
}