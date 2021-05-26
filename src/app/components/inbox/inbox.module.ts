import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { RecivedComponent } from './recived/recived.component';
import { SentComponent } from './sent/sent.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    InboxComponent,
    RecivedComponent,
    SentComponent,
    NewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InboxModule { }
