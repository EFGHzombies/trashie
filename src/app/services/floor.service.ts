import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BINS } from '../mocks/mock-trash';
import { FloorInterface } from '../interfaces/floor-interface';
import { TrashInterface } from '../interfaces/trash-interface';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor() { }

  getBins(floor: string): TrashInterface[] {
    return BINS.filter( bin => {
      return bin.location.includes(floor);
    });
  }

}
