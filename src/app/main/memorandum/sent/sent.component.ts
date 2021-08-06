import { MemorandumService } from '../memorandum.service';
import { Component, OnInit } from '@angular/core';
import { SentMemorandum } from '../models/sent';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  sent: SentMemorandum[] = [];
  constructor(private _serviceMemorandum: MemorandumService) {}

  ngOnInit(): void {
    this.sent = this._serviceMemorandum.getEnviados();
  }
}
