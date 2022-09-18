import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Front-end': return 'code';
      case 'Back-End': return 'computer';
      case 'DevOps' : return 'dns';
      case 'O.S.' : return 'memory';
      case 'IoT' : return 'smart_toy';
      case 'Games' : return 'videogame_asset';
      case 'Banco de Dados': return 'save';
    }
    return 'code';
  }

}
