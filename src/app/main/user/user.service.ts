import { User } from './../memorandum/models/user';
import { Country } from './../memorandum/models/country';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { City } from './../memorandum/models/city';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  endpoint = 'http://localhost:3000/api/v1/';

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint + 'countries');
  }

  getCities(country:number): Observable<City[]> {
    return this.http.get<City[]>(
      this.endpoint + 'cities/?country_id=' + country
    );
  }

  logIn(user:User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'login', user);
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.endpoint + 'register', user);
  }

}

  //pipe de captura de error
  /* .pipe(
      catchError(this.handleError('getMessages', messages))
    ); */
