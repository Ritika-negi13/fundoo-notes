import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(dataList:any[],search:string){
    if(!dataList)
    {
      return [];
    }
    if(!search)
    {
        return dataList;
    }
    search=search.toLowerCase();
    return dataList.filter((item)=>item.title.toLowerCase().includes(search)|| item.description.toLowerCase().includes(search));
  }

}
