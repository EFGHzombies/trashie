import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorsComponent } from './floors/floors.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { BinShareComponent } from './bin-share/bin-share.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [
    AppComponent,
    FloorsComponent,
    HomeComponent,
    OfficeComponent,
    BinShareComponent,
    LoginComponent,
    SetupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
