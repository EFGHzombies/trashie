import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FloorsComponent } from './floors/floors.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { BinShareComponent } from './bin-share/bin-share.component';
import { LoginComponent } from './login/login.component';
import { SetupComponent } from './setup/setup.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FloorsComponent,
    HomeComponent,
    OfficeComponent,
    BinShareComponent,
    LoginComponent,
    SetupComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
