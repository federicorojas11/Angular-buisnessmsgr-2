import { Memorandum } from './../models/memorandum';
import { MemorandumService } from '../memorandum.service';
import { Component, OnInit } from '@angular/core';
import { SentMemorandum } from '../models/sent';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  memorandum: Memorandum[] = [];
  formId = new FormGroup({
    userId: new FormControl(''),
  });

  constructor(private _memorandumService: MemorandumService) {}

  ngOnInit(): void {
    this.formId.get('userId').valueChanges.subscribe((userId) => {
      console.log(userId);
      this._memorandumService
        .getSentMemorandums(userId)
        .subscribe((data: Memorandum[]) => (this.memorandum = data));
    });
  }
}
