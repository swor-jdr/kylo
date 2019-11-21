export interface Personnage {
    id: number;
    name: string;
    slug?: string;
    owner: number;
    bio?: Text;
    signature?: Text;
    affectations?: Text;
    aversions?: Text;
    active: boolean;
    isStaff?: boolean;
    alive?: boolean;
    job?: string;
    title?: string;
    hide?: boolean;
    location?: string;
    hasForce?: boolean;
}
