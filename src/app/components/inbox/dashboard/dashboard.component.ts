import { HeaderComponent } from './../../../shared/header/header.component';
import { MessagesService } from '../messages.service';
import { Component, OnInit } from '@angular/core';
HeaderComponent;
MessagesService;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  msjRecibidos = 0;
  msjEnviados = 0;

  constructor(private _messaggesService: MessagesService) {}

  ngOnInit(): void {
    this.msjRecibidos = this._messaggesService.getMensajes().length;
  }
}
