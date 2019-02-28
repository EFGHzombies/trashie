import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  Office: string;
  Floors: number;
  Base: number;

  constructor(private authService: AuthService, private router: Router) { }

  disp() {
    console.log(this.Office);
    console.log(this.Floors);
    console.log(this.Base);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
