import { Component, OnInit } from '@angular/core';

import { FloorInterface } from '../interfaces/floor-interface';
import { OfficeService } from '../services/office.service';
import { TrashInterface } from '../interfaces/trash-interface';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  office: FloorInterface[];
  officeName: string = "Bitwise Office" // Mock for now, user input later

  constructor(private officeService: OfficeService) { }

  getOffice() {
    this.office = this.officeService.getOffice();
    console.log(this.office);
  }

  emptyOffice() {
    for(let i = this.office.length-1; i>=0; i--) {
      for(let j = this.office[i].bins.length-1; j>=0; j--) {
        this.office[i].bins[j].percentFull = 0;
        this.office[i].bins[j].hasFood = false;
      }
      this.office[i].floorStatus = false;
    }
  }

  checkStatus(floor: TrashInterface[]) {
    for(let i = floor.length-1; i>=0; i--) { 
      if(floor[i].percentFull >= 50) {
        return true;
      }
    }
  }

  floorRoute(id: number) {
    return this.officeService.changeRoute(id); 
  }

  ngOnInit() {
    this.getOffice();
  }

}
