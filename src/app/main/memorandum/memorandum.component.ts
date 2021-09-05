import { MemorandumService } from './memorandum.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss'],
})
export class MemorandumComponent implements OnInit {
  receivedMemos = 0;
  sentMemos = 0;

  constructor(private _memorandumService: MemorandumService, private router: Router) {}

  ngOnInit(): void {
    //  this.msjRecibidos = this._memorandumService.getReceived().length;
    //  this.msjEnviados = this._memorandumService.getSent().length;



  }
}
