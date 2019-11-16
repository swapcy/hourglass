import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = "";
  dateofBirth = "";

  constructor() { }


  setValue(name, dob){

    this.name = name;
    this.dateofBirth = dob;
  }

  getValues(){
    return  {'name' : this.name, 'dob': this.dateofBirth }
  }
}
