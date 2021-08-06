import { Memorandum } from '../models/message';
import { MemorandumService } from '../memorandum.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  memorandum: Memorandum[] = [];

  constructor(private _memorandumService: MemorandumService) {}

  ngOnInit(): void {
    this.memorandum = this._memorandumService.getRecibidos();
  }

  displayMessagges() {
    console.log(this.memorandum);
  }

  CountReaded() {
    let b = 0;
    for (let i = 0; i < this.memorandum.length; i++) {
      if (this.memorandum[i].readed == true) b++;
    }
    return b;
  }
}
