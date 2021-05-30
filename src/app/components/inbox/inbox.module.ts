import { HeaderComponent } from './../../shared/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { SentComponent } from './sent/sent.component';
import { NewComponent } from './new/new.component';
import { ReceivedComponent } from './received/received.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    InboxComponent,
    SentComponent,
    NewComponent,
    ReceivedComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [CommonModule],
})
export class InboxModule {}
