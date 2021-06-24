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
        borderActive: {
          color: 'black',
          width: '3px',
          style: 'dotted'
        },
        borderInactive: {
          width: '3px',
          style: 'solid',
          color: 'grey'
        }
      },
      themes: {
        primary: {
          border: '1px blue solid'
        },
        error: {
          border: '1px red solid'
        }
      },
      themesInheritance: {
        primary: false,
        error: false
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
