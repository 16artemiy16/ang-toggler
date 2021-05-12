import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngTogglerModule} from 'ang-toggler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngTogglerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
