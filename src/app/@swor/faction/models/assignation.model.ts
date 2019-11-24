import { Group } from './group.model';

export interface Assignation {
    element_type: string;
    element_id: number;
    isLeader: boolean;
    isMain: boolean;
    nb: number;
    group: Group;
}