import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { OFFICE } from '../mocks/mock-office';
// import { BINS } from '../mocks/mock-trash';
import { FloorInterface } from '../interfaces/floor-interface';
import { TrashInterface } from '../interfaces/trash-interface';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor() { }

  getBins(id: Number): TrashInterface[] {
    const selectedOffice: FloorInterface = OFFICE.find(office => office.id === id);
    return selectedOffice.bins;
  }

}
