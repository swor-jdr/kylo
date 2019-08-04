import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(environment.base.apiUrl + 'auth/login', {
      email: email,
      password: password
    });
  }

  logout() {
    return this.http.get(environment.base.apiUrl + 'auth/logout');
  }

  register(email: string, password: string) {
    return this.http.post(environment.base.apiUrl + 'users', {
      email: email,
      password: password
    });
  }
}
