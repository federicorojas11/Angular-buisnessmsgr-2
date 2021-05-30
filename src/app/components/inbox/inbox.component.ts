import { ReceivedComponent } from './received/received.component';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  @ViewChild(ReceivedComponent) child: any;

  constructor() {}
  total = '0';

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.total = this.child.total;
  }
}
