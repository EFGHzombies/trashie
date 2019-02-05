import { TrashInterface } from '../interfaces/trash-interface';

export const F_ONE: TrashInterface[] = [
    { id: '1a', percentFull: 100, hasFood: true, location: 'hallway'},
    { id: '1b', percentFull: 100, hasFood: true, location: 'front desk'},
    { id: '1c', percentFull: 20, hasFood: true, location: 'Donkey Kong'},
    { id: '1d', percentFull: 70, hasFood: false, location: 'suite 119'},
    { id: '1e', percentFull: 80, hasFood: true, location: 'hallway'},
    { id: '1f', percentFull: 90, hasFood: true, location: 'hallway'},
    { id: 'restroom', percentFull: 70, hasFood: false, location: 'Female restroom'},
    { id: 'restroom', percentFull: 60, hasFood: false, location: 'Men restroom'}
];
