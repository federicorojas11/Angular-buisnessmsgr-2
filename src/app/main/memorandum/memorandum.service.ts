import { Memorandum } from './models/memorandum';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemorandumService {

  constructor(private http: HttpClient, private _userService: UserService) {}

  baseEndpoint = 'http://localhost:3000/api/v1/memorandum/';
  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    })
  };

  //Mostrar memorandos recibidos por el usuario
  getReceived() {
       return this.http.get<Memorandum[]>(
      this.baseEndpoint+ 'received', this.httpOptions);
    }

  //Mostrar memorandos enviados por el usuario
  getSent() {
    return this.http.get<Memorandum[]>(
      this.baseEndpoint + 'sent', this.httpOptions);
  }

  //Eliminar un memorando
  deleteMemorandum(memorandum: Memorandum){
    return this.http.patch(this.baseEndpoint+ 'new/delete', memorandum);
  }

  //Enviar un nuevo memorando
  sendMemorandum(memorandum: Memorandum){
    return this.http.post(this.baseEndpoint+ 'new/send', memorandum);
  }

}
