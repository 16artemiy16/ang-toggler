import { NgModule } from '@angular/core';
import { AngTogglerComponent } from './components/ang-toggler/ang-toggler.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AngTogglerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngTogglerComponent
  ]
})
export class AngTogglerModule { }
