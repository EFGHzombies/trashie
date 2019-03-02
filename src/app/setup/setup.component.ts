import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SetupService } from '../services/setup.service';
import { Building } from '../models/building';

import { DEFAULTarray } from '../mocks/default-office';
import { DEFAULTfloor } from '../mocks/default-office';
import { TRASHarray } from '../mocks/default-trash';
import { TRASHbin } from '../mocks/default-trash';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  private building: Building = {
    name: 'office', 
    floor: DEFAULTarray
  };
  private Floors: string;
  private Base: string;
  private startup: boolean = false;
  private floorDetail: boolean = false;

  constructor(private authService: AuthService, private setupService: SetupService, private router: Router) { }

  start() {
    console.log(this.Floors);
    console.log(this.Base);
    let i = 0;
    console.log(i++);
    
    // let length = parseInt(this.Floors) + parseInt(this.Base);
    // for(let i = 1; i<length; i++) {
    //   this.building.floor.push(DEFAULTfloor);
    // }
    // for(let i = 0; i<length; i++) {
    //   this.building.floor[i].id = i;
    // }
    
    console.log(this.building);
    this.startup = true;
  }



  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
