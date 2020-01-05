import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PostsResponse, BlogPost } from './article.model';
import { Observable } from 'rxjs';


@Injectable()
export class BlogService {
    constructor(private http: HttpClient) {}

    private url = environment.base.apiUrl + 'posts/'

    all(): Observable<PostsResponse> {
        return this.http.get<PostsResponse>(this.url);
    }

    getBySlug(slug: string): Observable<BlogPost> {
        return this.http.get<BlogPost>(this.url + slug);
    }
}
