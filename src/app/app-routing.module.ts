import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/inbox/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ReceivedComponent } from './components/inbox/received/received.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'inbox',
    redirectTo: 'inbox/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'inbox/dashboard',
    component: DashboardComponent,
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
