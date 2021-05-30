import { DashboardComponent } from './components/inbox/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ReceivedComponent } from './components/inbox/received/received.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'inbox/received',
    component: ReceivedComponent,
  },
  {
    path: 'inbox/dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
