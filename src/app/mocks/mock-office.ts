import { FloorInterface } from '../interfaces/floor-interface';
import { F_ONE } from '../mocks/mock-floorOne';
import { F_TWO } from '../mocks/mock-floorTwo';
import { B_ONE } from '../mocks/mock-baseOne';

export const OFFICE: FloorInterface[] = [
    { id: 0, floorLevel: '2', restRoom: true, food: false, bins: F_ONE, floorStatus: true },
    { id: 1, floorLevel: '1', restRoom: true, food: true, bins: F_TWO, floorStatus: true },
    { id: 2, floorLevel: 'B1', restRoom: true, food: true, bins: B_ONE, floorStatus: true }
];
