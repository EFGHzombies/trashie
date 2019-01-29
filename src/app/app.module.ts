import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorsComponent } from './floors/floors.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { BinShareComponent } from './bin-share/bin-share.component';


@NgModule({
  declarations: [
    AppComponent,
    FloorsComponent,
    HomeComponent,
    OfficeComponent,
    BinShareComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
