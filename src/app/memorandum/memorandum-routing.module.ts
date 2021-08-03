import { SentComponent } from './sent/sent.component';
import { ReceivedComponent } from './received/received.component';
import { MemorandumComponent } from './memorandum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MemorandumComponent,
  },
  {
    path: 'sent',
    component: SentComponent,
  },
  {
    path: 'received',
    component: ReceivedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
