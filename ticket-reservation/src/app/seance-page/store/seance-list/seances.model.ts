import { BusinessEntity } from './../../../../core/commons/models/business-entity.model';

export interface Seance extends BusinessEntity {
    star: number;
    desc: string;
    freeSpots: number;
    spotsTable: boolean[];
}