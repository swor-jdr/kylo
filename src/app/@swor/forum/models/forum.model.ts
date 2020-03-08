import { Model } from '../../../@core/model';
import { Topic } from './topic.model';
import { Post } from './post.model';
import { Bread } from './bread.model';

export interface Forum extends Model {
    name: string;
    slug?: string;
    content: Text;
    last_id?: number;
    children?: Forum[];
    parent_id: number;
    _lft?: number;
    _rgt?: number;
    topics?: Topic[];
    last_post?: Post;
    breads?: Bread[];
}
