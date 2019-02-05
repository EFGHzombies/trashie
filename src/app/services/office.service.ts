import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { OFFICE } from '../mocks/mock-office';
import { FloorInterface } from '../interfaces/floor-interface';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private router: Router) { }

  getOffice(): FloorInterface[] {
    return OFFICE;
  }

  changeRoute(id: number) {
    // global floor tracker variable = id;
    return this.router.navigateByUrl(`/floors/${id}`);
  }

}
