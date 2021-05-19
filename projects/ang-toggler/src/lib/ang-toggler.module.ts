import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { AngTogglerComponent } from './components/ang-toggler/ang-toggler.component';
import { CommonModule } from '@angular/common';
import { TogglerStylingI } from './models/toggler-styling.interface';

export interface AngTogglerConfigI {
  styling?: TogglerStylingI;
}

export const CONFIG_TOKEN = new InjectionToken<AngTogglerConfigI>('AngTogglerModuleConfig');

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
export class AngTogglerModule {
  static forRoot(config: AngTogglerConfigI = {}): ModuleWithProviders<AngTogglerModule> {
    return {
      ngModule: AngTogglerModule,
      providers: [{
        provide: CONFIG_TOKEN,
        useValue: config
      }]
    };
  }
}
