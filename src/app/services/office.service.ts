import { Injectable } from '@angular/core';

import { OFFICE } from '../mocks/mock-office';
import { FloorInterface } from '../interfaces/floor-interface';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  getOffice(): FloorInterface[] {
    return OFFICE;
  }

  constructor() { }
}
