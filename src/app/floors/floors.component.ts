import { Component, OnInit } from '@angular/core';

import { FloorInterface } from '../interfaces/floor-interface';
import { FloorService } from '../services/floor.service';
import { TrashInterface } from '../interfaces/trash-interface';
import { ActivatedRoute } from '@angular/router';
import { Trash } from '../models/trash';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  bins: TrashInterface[];
  floor: Number;
  bin: TrashInterface = new Trash();

  constructor(private floorService: FloorService, private route: ActivatedRoute) { }

  getBins() {
    return this.route.params.subscribe( params => {
      this.floor = +params.floor;
      this.bins = this.floorService.getBins(+params.floor);
    });
  }

  getBin(bin) {
    this.bin = bin;
  }

  ngOnInit() {
    this.getBins();
  }

}
