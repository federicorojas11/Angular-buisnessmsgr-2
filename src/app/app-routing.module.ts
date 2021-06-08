import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
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
    path: 'messages',
    loadChildren: () =>
      import('./components/messages/messages.module').then(
        (m) => m.MessagesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
