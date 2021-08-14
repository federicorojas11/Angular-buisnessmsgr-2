import { Memorandum } from './../models/memorandum';
import { MemorandumService } from '../memorandum.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss'],
})
export class ReceivedComponent implements OnInit {
  memorandum: Memorandum[] = [];
  formId = new FormGroup({
    userId: new FormControl(''),
  });
  readed = this.CountReaded();
  constructor(private _memorandumService: MemorandumService) {}

  ngOnInit(): void {
    this.formId.get('userId').valueChanges.subscribe((userId) => {
      console.log(userId);
      this._memorandumService
        .getMemorandums(userId)
        .subscribe((data: Memorandum[]) => (this.memorandum = data));
    });
  }

  CountReaded() {
    let b = 0;
    for (let i = 0; i < this.memorandum.length; i++) {
      if (this.memorandum[i].readed == true) b++;
    }
    return b;
  }
}
