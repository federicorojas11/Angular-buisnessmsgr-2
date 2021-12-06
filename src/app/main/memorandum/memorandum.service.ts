import { Memorandum } from './models/memorandum';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemorandumService {

  constructor(private http: HttpClient) {}

  baseEndpoint = 'http://localhost:3000/api/v1/memorandum/';
/*   headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
 */

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),

    params: new HttpParams({fromString: 'angular=awesome'})
  };

  body = {
    params : {
     'title' : 'title',
     'message' : 'message',
     'userName' : 'username'
    }
 }


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
  sendMemorandum(memorandum: Memorandum, destinatario: string){

    this.body.params.message = memorandum.message;
    this.body.params.title = memorandum.title;
    this.body.params.userName = destinatario;
    return this.http.post(this.baseEndpoint+ 'new',this.body, this.httpOptions);
  }

}
