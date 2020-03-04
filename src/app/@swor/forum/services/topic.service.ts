import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../models/topic.model';

@Injectable()
export class TopicService {
    constructor(private http: HttpClient) {}

    private baseUrl = environment.base.apiUrl + 'forums/';

    get(forumId: number, topicId: number) {
        return this.http.get<Topic>(this.baseUrl + forumId + '/topics/' + topicId);
    }

    create(forumId: number, topic: any) {}
}
