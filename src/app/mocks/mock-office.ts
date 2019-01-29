import { FloorInterface } from '../interfaces/floor-interface';

export const OFFICE: FloorInterface[] = [
    { floorLevel: '2', trashType: ['restroom'], binCount: 5, floorStatus: false },
    { floorLevel: '1', trashType: ['restroom', 'food'], binCount: 8, floorStatus: false },
    { floorLevel: 'B1', trashType: ['restroom', 'food'], binCount: 7, floorStatus: false }
];
