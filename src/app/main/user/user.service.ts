import { User } from './../memorandum/models/user';
import { Country } from './../memorandum/models/country';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from './../memorandum/models/city';

@Injectable({
  providedIn: 'root',
})
export class UserService {

 currentUser:User;
 token = '';

  constructor(private http: HttpClient) {}

  endpoint = 'http://localhost:3000/api/v1/';

  declareUser(user:User){
    this.currentUser = user;
  }

  logIn(user:User): Observable<User> {
    return this.http.post<User>(this.endpoint + 'auth/login', user);
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.endpoint + 'users', user);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint + 'countries');
  }

  getCities(country:number): Observable<City[]> {
    return this.http.get<City[]>(
      this.endpoint + 'cities/?country_id=' + country
    );
  }

  asignToken(token: string): void{
    localStorage.setItem('token', token) ;
  }

}

  //pipe de captura de error
  /* .pipe(
      catchError(this.handleError('getMessages', messages))
    ); */
