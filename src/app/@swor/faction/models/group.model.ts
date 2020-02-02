import { Personnage } from '../../auth/models/personnage.model';

export interface Group {
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    name: string;
    slug: string;
    content: string;
    color: string;
    active: boolean;
    isSecret: boolean;
    isPrivate: boolean;
    isFaction: boolean;
    personnages?: Personnage[];
    planets?: any;
}