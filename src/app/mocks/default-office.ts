import { FloorInterface } from '../interfaces/floor-interface';
import { TRASHarray } from '../mocks/default-trash';

export const DEFAULTarray: FloorInterface[] = [
    { id: 1, floorLevel: '1', restRoom: true, food: true, bins: TRASHarray, floorStatus: false }
]

export const DEFAULTfloor: FloorInterface = {
    id: 0, floorLevel: '1', 
    restRoom: true, 
    food: true, 
    bins: TRASHarray, 
    floorStatus: false
}