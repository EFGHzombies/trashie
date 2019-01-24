import { Component, OnInit } from '@angular/core';

import { FloorInterface } from '../interfaces/floor-interface';
import { FloorService } from '../services/floor.service';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  floor: FloorInterface;

  constructor(private floorService: FloorService) { }

  ngOnInit() {
  }

}
