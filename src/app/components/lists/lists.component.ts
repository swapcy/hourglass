import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ListService } from 'src/app/services/list.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  listItem = "";
  myList = new FormControl(); 
  itemList = new Array();
  user$ : Observable<any>;
  
  constructor(private list: ListService,private dataService : DataService, private router : Router) { }

  ngOnInit() {
    if(this.dataService.getValues()['dob']){
      this.itemList = this.list.getList();  
    }else{
      this.router.navigate(['/']);
    }
    
  }

  addtoList(item){
    // console.log(`Item is ${this.listItem}`);    
    // this.itemList.push(this.listItem);
    this.list.addItem(this.listItem);
    this.itemList = this.list.getList();
    console.log('ITEM ADDED  : ',this.itemList);
    item.reset();
    
  }

  removeItem(item){
    // console.log(`Item to remove is ${items} & index is ${this.itemList.indexOf(items)}`)
    // this.itemList.splice(this.itemList.indexOf(items),1);
    // console.log(this.itemList);
    this.list.removeItem(item.id,item.item);
    this.itemList = this.list.getList();
  }


}
