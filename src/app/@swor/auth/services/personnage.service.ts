import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user.model';
import { Personnage } from '../models/personnage.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.base.apiUrl + 'personnages/';

  get(user: User) {
    return this.http.get<Personnage[]>(environment.base.apiUrl + 'owner/' + user.id + '/personnages');
  }

  change(personnage: Personnage) {
    return this.http.get<Personnage>(this.baseUrl + personnage.id + '/change');
  }
}
