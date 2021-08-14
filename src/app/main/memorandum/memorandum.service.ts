import { Memorandum } from './models/memorandum';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MemorandumService {
  constructor(private http: HttpClient) {}

  baseEndpoint = 'http://localhost:3000/api/v1/memorandum/';

  /* funcion 'get' memorandums */
  getMemorandums(id) {
    return this.http.get<Memorandum[]>(
      this.baseEndpoint + 'received/?receiverId=' + id
    );
  }

  getSentMemorandums(id) {
    return this.http.get<Memorandum[]>(
      this.baseEndpoint + 'sent/?senderId=' + id
    );
  }
}
