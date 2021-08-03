import { Mensaje } from '../models/message';
import { MessagesService } from '../memorandum.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  mensajes: Mensaje[] = [];

  constructor(private _servicioMensajes: MessagesService) {}

  ngOnInit(): void {
    this.mensajes = this._servicioMensajes.getRecibidos();
  }

  displayMessagges() {
    console.log(this.mensajes);
  }

  CountReaded() {
    let b = 0;
    for (let i = 0; i < this.mensajes.length; i++) {
      if (this.mensajes[i].readed == true) b++;
    }
    return b;
  }
}
