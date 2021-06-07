import { MessagesService } from './messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  msjRecibidos = 0;
  msjEnviados = 0;
  Recibidos: any;
  mensajes = [
    {
      id: 1,
      titulo: 'Test mensaje 1',
      mensaje:
        'Magna dolore ipsum sit occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'Irure amet',
      time: new Date(),
    },
    {
      id: 2,
      titulo: 'Test Mensaje 2',
      mensaje:
        'Ma sit labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'irure amet',
      time: new Date(),
    },
  ];
  constructor(private _messagesService: MessagesService) {}

  ngOnInit(): void {
    this.msjRecibidos = this._messagesService.getRecibidos().length;
    this.msjEnviados = this._messagesService.getEnviados().length;
    this.Recibidos = this._messagesService.getRecibidos();
  }
}
