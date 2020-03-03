import { Model } from '../../../@core/model';
import { Personnage } from '../../auth/models/personnage.model';
import { Topic } from './topic.model';

export interface Post extends Model {
    author_id: number;
    topic_id: number;
    content: Text;
    author?: Personnage;
    topic?: Topic;
}
