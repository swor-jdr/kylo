import { Model } from "../../../@core/model";

export interface Forum extends Model {
    name: string;
    slug?: string;
    content: Text;
    last_id?: number;
}