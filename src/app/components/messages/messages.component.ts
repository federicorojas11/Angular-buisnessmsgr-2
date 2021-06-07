import { RouterModule } from '@angular/router';
import { MessagesService } from './messages.service';
import { Component, OnInit } from '@angular/core';
RouterModule;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  msjRecibidos = 0;
  msjEnviados = 0;
  Recibidos = {};

  constructor(private _messagesService: MessagesService) {}

  ngOnInit(): void {
    this.msjRecibidos = this._messagesService.getRecibidos().length;
    this.msjEnviados = this._messagesService.getEnviados().length;
    this.Recibidos = this._messagesService.getRecibidos();
  }
}
