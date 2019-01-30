import { TrashInterface } from '../interfaces/trash-interface';

export interface FloorInterface {
    id: number;
    floorLevel: string;
    trashType: string[];
    bins: TrashInterface[];
    floorStatus: boolean;
}
