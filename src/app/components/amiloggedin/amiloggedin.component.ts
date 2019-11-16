import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-amiloggedin',
  templateUrl: './amiloggedin.component.html',
  styleUrls: ['./amiloggedin.component.scss']
})
export class AmiloggedinComponent implements OnInit {
  @ViewChild('loginAlert') loginAlert : ElementRef;
  private g_icon = require("src\/app\/components\/assets\/g-icon.png");
  private f_icon = require("src\/app\/components\/assets\/f-icon.png");
  private t_icon = require("src\/app\/components\/assets\/t-icon.png");


  constructor(public auth : AuthService) { }

  ngOnInit() {
  }

  googleLogin(){
    this.auth.googleSignin();

  }

  facebookLogin(){
    this.auth.facebookSignin();
  }

  twitterLogin(){
    this.auth.twitterSignin();
  }

}
