import { Mensaje } from './models/message';
import { MessaggesService } from './messagges.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  countMessagges = 0;

  constructor(private _messaggesService: MessaggesService) {}

  ngOnInit(): void {
    this.countMessagges = this._messaggesService.getMensajes().length;
  }
}
