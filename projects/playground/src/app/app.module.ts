import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngTogglerModule } from 'ang-toggler';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngTogglerModule.forRoot({
      styling: {
        colorSliderInactive: 'red',
        colorSliderActive: 'green',
        colorBackgroundInactive: '#cdc7c7',
        colorBackgroundActive: '#16ff00',
        border: {
          color: 'grey',
          width: '3px',
          style: 'dotted'
        },
        borderActive: {
          color: 'black',
          width: '3px',
        },
        borderInactive: {
          width: '3px',
          style: 'solid'
        }
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
