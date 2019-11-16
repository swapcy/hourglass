import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.scss']
})
export class WhoamiComponent implements OnInit {
  username = "";
  userdateofbirth = "";
  myform = new FormControl();
  path = "";
  
  //lottie Animation
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;


  constructor(private dataService : DataService) {
    this.lottieConfig = {
      path: '/assets/hourglass.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
   }

   handleAnimation(anim: any) {
    this.anim = anim;
}

stop() {
    this.anim.stop();
}

play() {
    this.anim.play();
}

pause() {
    this.anim.pause();
}

setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
}

  ngOnInit() {
  }

  onClickContinue(myformvalues){
    // console.log(`Name is: ${this.username}`);
    // console.log(`Date of birth: ${this.userdateofbirth}`);
    // console.log('Form Values: '+myformvalues.value);
    this.dataService.setValue(this.username, this.userdateofbirth);
    myformvalues.reset();
  }



}
