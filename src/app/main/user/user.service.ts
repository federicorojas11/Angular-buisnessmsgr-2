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
    return this.http.get<Country[]>(this.endpoint + 'countries/');
  }

  getCities(country): Observable<City[]> {
    return this.http.get<City[]>(
      this.endpoint + 'cities/?country_id=' + country
    );
  }

  logIn(user): Observable<User[]> {
    return this.http.post<User[]>(this.endpoint + 'login/', user);
  }
  //pipe de captura de error
  /* .pipe(
      catchError(this.handleError('getMessages', messages))
    ); */
  /*     tests      */
  /* ------------- */
  recibidos = [
    {
      id: 1,
      title: 'Test mensaje 1',
      message:
        'Magna dolore ipsum sit occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      from: 'Irure amet',
      time: new Date(),
      readed: true,
    },
    {
      id: 2,
      title: 'Test Mensaje 2',
      message:
        'Ma sit labore ex elit nulla culpa ad exercitation reprehenderit.',
      from: 'irure amet',
      time: new Date(),
      readed: true,
    },
    {
      id: 3,
      title: 'Test mensaje N.3',
      message: 'ex elit nulla culpa ad.',
      from: 'amet',
      time: new Date(),
      readed: false,
    },
    {
      id: 4,
      title: 'Test mensaje IV',
      message: 'afed exercitation reprehenderit.',
      from: 'Irure irure',
      time: new Date(),
      readed: false,
    },
    {
      id: 5,
      title: 'Test mensaje cinco',
      message:
        'occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      from: 'I. amet',
      time: new Date(),
      readed: true,
    },
  ];

  enviados = [
    {
      id: 1,
      title: 'Enviado 11',
      message: 'Est do sit cillum aute nulla amet aute esse.',
      receiver: 'Irure amet',
      time: new Date(),
    },
    {
      id: 2,
      title: 'Enviado 22',
      message: 'Est do sit cillum',
      receiver: 'Irure amet Irure amet',
      time: new Date(),
    },
    {
      id: 3,
      title: 'Enviado 33',
      message: 'aute nulla amet aute esse.',
      receiver: 'amet Irure',
      time: new Date(),
    },
  ];

  getRecibidos() {
    return this.recibidos;
  }

  getEnviados() {
    return this.enviados;
  }
}
