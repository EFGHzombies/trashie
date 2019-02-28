import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { Building } from '../models/building';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  private Floors: string;
  private Base: string;

  constructor(private building: Building, private authService: AuthService, private router: Router) { }

  disp() {
    console.log(this.Floors);
    console.log(this.Base);
    let length = parseInt(this.Floors) + parseInt(this.Base);
    console.log(length);
    
    this.building.floor = Array(length);

    console.log(this.building);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
