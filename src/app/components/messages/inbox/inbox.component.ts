import { HeaderComponent } from '../../../shared/header/header.component';
import { MessagesService } from '../messages.service';
import { Component, OnInit } from '@angular/core';
HeaderComponent;
MessagesService;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  constructor(private _messaggesService: MessagesService) {}

  ngOnInit(): void {}
}
