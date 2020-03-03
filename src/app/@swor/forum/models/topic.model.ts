import { Model } from '../../../@core/model';
import { Post } from './post.model';

export interface Topic extends Model {
    author_id: number;
    forum_id: number;
    name: string;
    slug: string;
    content: Text;
    last_post?: Post;
}
