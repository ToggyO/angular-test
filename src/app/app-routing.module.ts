import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ItemComponent,
  LoginComponent,
  PurchaseComponent,
  RegistrationComponent,
  UsersComponent,
} from './components';

const routes: Routes = [
  { path: '', component: PurchaseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegistrationComponent },
  { path: 'users', component: UsersComponent },
  { path: 'item/:id', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
