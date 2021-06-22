import { Inject, Injectable } from '@angular/core';
import { AngTogglerConfigI, CONFIG_TOKEN } from './ang-toggler.module';
import { TogglerStylingI } from './models/toggler-styling.interface';
import { omit } from './utils/object.utils';

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

  getThemeStyles(theme?: string): TogglerStylingI {
    if (!theme) {
      return this.moduleStyling;
    }

    const themeStyles = this.moduleConfig.themes?.[theme] || {};
    const stylingToMerge = omit(
      this.moduleStyling,
      [
        ...themeStyles.border ? ['borderActive', 'borderInactive'] : []
      ]
    );

    return Object.assign(
      {},
      stylingToMerge,
      themeStyles
    );
  }
}
