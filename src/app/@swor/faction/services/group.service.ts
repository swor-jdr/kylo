import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Group } from '../models/group.model';

@Injectable({
    providedIn: 'root'
})
export class GroupService {
    constructor(private http: HttpClient) { }

    private baseUrl = environment.base.apiUrl + 'groups/';

    list(): Observable<Group[]> {}
}
