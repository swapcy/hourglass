import { Injectable } from '@angular/core';
import { _List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listItem : _List;
  notList = new Array();

  
  constructor() { }

  addItem(item){
    const i = {
      itm : item,
      status : 'Active',
      createdDate : new Date().toDateString(),
      index : new Date().getTime()
    }
    
    this.notList.push(i);
    // console.log('ITEM ADDED  : ',i);
  }

  getList(){
    const activeList = new Array();
    this.notList.forEach(( value ) => {
      if(value['status']=='Active'){
        activeList.push({'item': value['itm'],'id': value['index']});
      }
    });

    return activeList;
  }

  removeItem(uid,item){
    const i = {
      itm : item,
      status : 'Deleted',
      updatedDate : new Date().toDateString(),
      id : uid
    }
    
    this.notList.forEach( (value, index) =>{
      if(value['index']==uid){
        this.notList.splice(index,1,i);
      }
      
    } )
    
    
    
  }

}
