import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAddjobComponent } from './admin-addjob/admin-addjob.component';
import { AdminEditjobComponent } from './admin-editjob/admin-editjob.component';
import { AdminJoblistComponent } from './admin-joblist/admin-joblist.component';
import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AdminAddjobComponent,
    AdminEditjobComponent,
    AdminJoblistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
