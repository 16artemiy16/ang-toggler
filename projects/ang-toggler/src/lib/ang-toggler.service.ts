import { Inject, Injectable } from '@angular/core';
import { AngTogglerConfigI, CONFIG_TOKEN } from './ang-toggler.module';
import { TogglerStylingI } from './models/toggler-styling.interface';

@Injectable({
  providedIn: 'root'
})
export class AngTogglerService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly moduleConfig: AngTogglerConfigI
  ) { }

  get moduleStyling(): TogglerStylingI {
    return this.moduleConfig.styling || {};
  }
}
