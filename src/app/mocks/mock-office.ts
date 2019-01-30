import { FloorInterface } from '../interfaces/floor-interface';
import { F_ONE } from '../mocks/mock-floorOne';
import { F_TWO } from '../mocks/mock-floorTwo';
import { B_ONE } from '../mocks/mock-baseOne';

export const OFFICE: FloorInterface[] = [
    { id: 0, floorLevel: '2', trashType: ['restroom'], bins: F_ONE, floorStatus: true },
    { id: 1, floorLevel: '1', trashType: ['restroom', 'food'], bins: F_TWO, floorStatus: true },
    { id: 2, floorLevel: 'B1', trashType: ['restroom', 'food'], bins: B_ONE, floorStatus: true }
];