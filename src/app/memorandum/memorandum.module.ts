import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorandumComponent } from './memorandum.component';
import { SentComponent } from './sent/sent.component';
import { NewComponent } from './new/new.component';
import { ReceivedComponent } from './received/received.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MemorandumComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class MessagesModule {}
