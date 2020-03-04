import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Forum } from '../models/forum.model';

@Injectable()
export class ForumService {
    constructor(private http: HttpClient) {}

    private baseUrl = environment.base.apiUrl + 'forums/';

    index() {
        return this.http.get<Forum[]>(this.baseUrl);
    }

    show(id: number) {
        return this.http.get<Forum>(this.baseUrl + id);
    }

    showBySlug(slug: string) {
        return this.http.get<Forum>(this.baseUrl + slug);
    }
}
