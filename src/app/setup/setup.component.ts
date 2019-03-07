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
import { AngularFireAuth } from 'angularfire2/auth';

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

  private a = {
    id: 'a',
    name: 'test',
    num: 1
  };
  private x = {
    head: 'hello',
    list: []
  };
  
  constructor(private authService: AuthService, private setupService: SetupService, private router: Router) { }

  addFloor() {
    this.floorIn.id = this.idCount;
    this.idCount = this.idCount + 1;
    for(let i = parseInt(this.binCount)-1; i > 0; i--) {
      this.floorIn.bins.push(TRASHbin);
    }
    // for(let i = 1; i < this.floorIn.bins.length; i++) {
    //   this.floorIn.bins[i].id = String.fromCharCode(this.floorIn.bins[i].id.charCodeAt(0) + i);
    // }

    // console.log(this.floorIn);
    this.building.floor.push(this.floorIn);
    console.log(this.building);
    
  }

  test() {
    this.x.list.push(this.a);
    this.x.list.push(this.a);
    this.x.list.push(this.a);

    // let i = 0;
    // this.x.list.forEach(element => {
    //   this.getId(i);
    //   i++;
    // });

    // for(let i = 0; i<this.x.list.length; i++) {
    //   this.getId(i);
    //   console.log(this.x.list[i]);
    // }
    
    console.log(this.x.list);
  }

  getId(z: number) {
    let a = 'a';
    this.x.list[z].id = String.fromCharCode(a.charCodeAt(0) + z);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
