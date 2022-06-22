import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigningComponent} from "./signing/signing.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signing' },
  { path: 'signing', component: SigningComponent },
  { path: 'crypto' , component: CryptoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
