import { TrashInterface } from '../interfaces/trash-interface';

export interface FloorInterface {
    id: number;
    floorLevel: string;
    food: boolean;
    bins: TrashInterface[];
    floorStatus: boolean;
    restRoom: boolean;
}
