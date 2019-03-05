import { FloorInterface } from '../interfaces/floor-interface';
import { TRASHarray } from '../mocks/default-trash';

export const DEFAULTarray: FloorInterface[] = [
    { id: 0, floorLevel: '', restRoom: true, food: true, bins: TRASHarray, floorStatus: false }
]

export const DEFAULTfloor: FloorInterface = {
    id: 0, floorLevel: '', 
    restRoom: true, 
    food: true, 
    bins: TRASHarray, 
    floorStatus: false
}