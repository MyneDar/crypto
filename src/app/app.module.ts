import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import {SigningComponent} from "./signing/signing.component";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CryptoComponent } from './crypto/crypto.component';



@NgModule({
  declarations: [
    AppComponent,
    SigningComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
