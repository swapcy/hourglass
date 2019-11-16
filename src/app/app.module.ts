import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoamiComponent } from './components/whoami/whoami.component';
import { WhatstimeComponent } from './components/whatstime/whatstime.component';
import { ListsComponent } from './components/lists/lists.component';
import { TimeService } from './services/time.service';
import { DataService } from './services/data.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { LottieAnimationViewModule } from 'ng-lottie';
import { AmiloggedinComponent } from './components/amiloggedin/amiloggedin.component';




@NgModule({
  declarations: [
    AppComponent,
    WhoamiComponent,
    WhatstimeComponent,
    ListsComponent,
    AmiloggedinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LottieAnimationViewModule.forRoot()

  ],
  providers: [DataService, TimeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
