import { Memorandum } from './models/memorandum';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemorandumService {

  private userSession:User = {
    userName:'',
    firstName: '',
    id: 0,
    lastName:'',
    password:'',
    country:'',
    city:'',
    token:''
  }

  constructor(private http: HttpClient) {}

  baseEndpoint = 'http://localhost:3000/api/v1/memorandum/';

  declareUser(user: User):void{
    this.userSession = user;
  }

  //Mostrar memorandos recibidos por el usuario
  getReceived(id:number) {
    return this.http.get<Memorandum[]>(
      this.baseEndpoint + 'received/?receiverId=' + id
    );
  }

  //Mostrar memorandos enviados por el usuario
  getSent(id:number) {
    return this.http.get<Memorandum[]>(
      this.baseEndpoint + 'sent/?senderId=' + id
    );
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
