import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';
import { Enviado } from '../models/sent';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  enviados: Enviado[] = [];
  constructor(private _servicioMensajes: MessagesService) {}

  ngOnInit(): void {
    this.enviados = this._servicioMensajes.getEnviados();
  }
}
