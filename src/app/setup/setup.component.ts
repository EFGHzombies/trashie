import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SetupService } from '../services/setup.service';
import { Building } from '../models/building';
import { FloorInterface } from '../interfaces/floor-interface';

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
    floor: []
  };
  private idCount: number = 0;
  private floorIn: FloorInterface = DEFAULTfloor;
  
  private binCount: string;
  
  constructor(private authService: AuthService, private setupService: SetupService, private router: Router) { }

  addFloor() {
    this.floorIn.id = this.idCount;
    this.idCount = this.idCount + 1;
    for(let i = parseInt(this.binCount) - 1; i > 0; i--) {
      this.floorIn.bins.push(TRASHbin);
    }
    for(let i = 1; i < this.floorIn.bins.length; i++) {
      this.floorIn.bins[i].id = String.fromCharCode(this.floorIn.bins[i].id.charCodeAt(0) + i);
    }
    console.log(this.floorIn);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
