import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { WhatstimeComponent } from './components/whatstime/whatstime.component';
import { WhoamiComponent } from './components/whoami/whoami.component';
import { AmiloggedinComponent } from './components/amiloggedin/amiloggedin.component';

const routes: Routes = [
  {
    path: '',
    component: WhoamiComponent,
  },
  {
    path: 'me',
    component: WhoamiComponent,
  },
  {
    path: 'time',
    component: WhatstimeComponent,
  },
  {
    path: 'list',
    component: ListsComponent,
  },
  {
    path: 'login',
    component: AmiloggedinComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
