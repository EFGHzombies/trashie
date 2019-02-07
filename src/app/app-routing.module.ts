import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { FloorsComponent } from './floors/floors.component';
import { BinShareComponent } from './bin-share/bin-share.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'office', component: OfficeComponent },
  { path: 'floors/:floor', component: FloorsComponent },
  { path: 'bin-share', component: BinShareComponent },
  { path: 'login', component: LoginComponent },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
