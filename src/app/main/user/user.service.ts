import { User } from './../memorandum/models/user';
import { Country } from './../memorandum/models/country';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { City } from './../memorandum/models/city';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User;
  token = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient) {}

  endpoint = 'http://localhost:3000/api/v1/';

  declareUser(user: User) {
    this.currentUser = user;
  }

  logIn(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'auth/login', user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'users', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint + 'users', this.httpOptions);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint + 'countries');
  }

  getCities(country: number): Observable<City[]> {
    console.log(this.endpoint + 'cities/?country_id=' + country);
    return this.http.get<City[]>(
      this.endpoint + 'cities/?country_id=' + country
    );
  }

  asignToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
