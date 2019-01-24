import { Component, OnInit } from '@angular/core';

import { FloorInterface } from '../interfaces/floor-interface';
import { OfficeService } from '../services/office.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  office: FloorInterface[];

  constructor(private officeService: OfficeService) { }

  getOffice() {
    this.office = this.officeService.getOffice();
    console.log(this.office);
    
  }



  ngOnInit() {
  }

}
