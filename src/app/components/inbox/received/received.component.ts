import { Mensaje } from './../models/message';
import { MessaggesService } from './../messagges.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  mensajes: Mensaje[] = [];

  constructor(private _servicioMensajes: MessaggesService) {}

  ngOnInit(): void {
    this.mensajes = this._servicioMensajes.getMensajes();
  }

  displayMessagges() {
    console.log(this.mensajes);
  }
}
