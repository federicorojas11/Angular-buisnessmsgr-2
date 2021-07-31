import { MessagesRoutingModule } from './messages-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { SentComponent } from './sent/sent.component';
import { NewComponent } from './new/new.component';
import { ReceivedComponent } from './received/received.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MessagesComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class MessagesModule {}
