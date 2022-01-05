import { MemorandumService } from './memorandum.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss'],
})
export class MemorandumComponent implements OnInit {
  countReceived = 0;
  countSent = 0;

  constructor(
    private _memorandumService: MemorandumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._memorandumService
      .getReceived()
      .subscribe((e) => (this.countReceived = e.length));
    this._memorandumService
      .getSent()
      .subscribe((e) => (this.countSent = e.length));
  }
}
