import { ReceivedComponent } from './received/received.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
  },
  {
    path: '/inbox',
    component: InboxComponent,
  },
  {
    path: '/received',
    component: ReceivedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
