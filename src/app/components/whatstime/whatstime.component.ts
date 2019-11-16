import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TimeService } from 'src/app/services/time.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-whatstime',
  templateUrl: './whatstime.component.html',
  styleUrls: ['./whatstime.component.scss']
})
export class WhatstimeComponent implements OnInit {
  
  nameList = [];
  name = "";
  dateofBirth = "";
  dDays = '0';
  dHours = '0';
  dMins = '0';
  dSecs = '0';
  dhms : any;

  @ViewChild('loginAlert') loginAlert : ElementRef;
  private g_icon = require("src\/app\/components\/assets\/g-icon.png");
  private f_icon = require("src\/app\/components\/assets\/f-icon.png");
  private t_icon = require("src\/app\/components\/assets\/t-icon.png");


  constructor(private dataService : DataService, private time : TimeService, private router : Router, public auth : AuthService) { }

  ngOnInit() {
    this.name = this.dataService.getValues()['name'];
    this.dateofBirth = this.dataService.getValues()['dob'];

    if(this.name && this.dateofBirth){
      console.log(`Name: ${this.name} & Date of Birth: ${this.dateofBirth}`);
      this.calc(this.dateofBirth);
      
      }else{
      console.log(`Please provide name & date of birth! ${this.name} & ${this.dateofBirth}`);
      this.router.navigate(['/']);
    }

  }

  calc(dob){
    this.dhms = this.time.calculateTime(dob);
    this.dDays = this.dhms['days'];
    this.dHours = this.dhms['hours'];
    this.dMins = this.dhms['mins'];
    this.dSecs = this.dhms['secs'];

    setInterval(()=> {
      this.dhms = this.time.calculateTime(dob);  
      this.dDays = this.dhms['days'];
      this.dHours = this.dhms['hours'];
      this.dMins = this.dhms['mins'];
      this.dSecs = this.dhms['secs'];    
    },1000)

    
  }
}
