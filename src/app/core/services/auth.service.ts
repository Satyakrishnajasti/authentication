import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Signup } from '../models/signup';
import { Signin } from '../models/sigin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:5555/user_details";

  constructor(private http: HttpClient) { }

  data(): Observable<any> {
    return this.http.get('http://localhost:5555/user_details');
  }

  signup(user: Signup): Observable<any> {
    return this.http.post('http://localhost:5555/user_details', user);
  }

  signin(user: Signin): Observable<any> {
    return this.http.post(`{this.url}user/sigin`, user);
  }
}
