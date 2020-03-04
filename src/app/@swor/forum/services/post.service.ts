import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {}

    private baseUrl = environment.base.apiUrl + 'topics/';
}
