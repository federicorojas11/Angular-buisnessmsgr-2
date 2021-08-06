import { ReceivedComponent } from './received/received.component';
import { NewComponent } from './new/new.component';
import { SentComponent } from './sent/sent.component';
import { MemorandumRoutingModule } from './memorandum-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorandumComponent } from './memorandum.component';

@NgModule({
  declarations: [
    MemorandumComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
  ],
  imports: [CommonModule, MemorandumRoutingModule],
})
export class MemorandumModule {}
