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
      sizing: {
        sm: {
          width: '50px',
          height: '28px',
          sliderSize: '23px'
        },
        md: {
          width: '60px',
          height: '34px',
          sliderSize: '26px'
        },
        lg: {
          width: '70px',
          height: '40px',
          sliderSize: '35px'
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
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
