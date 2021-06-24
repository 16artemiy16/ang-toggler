import { Inject, Injectable } from '@angular/core';
import { AngTogglerConfigI, CONFIG_TOKEN } from './ang-toggler.module';
import { TogglerSizingI, TogglerSizingItemI, TogglerStylingI } from './models/toggler-styling.interface';
import { omit } from './utils/object.utils';
import { CssVarEnum } from './components/ang-toggler/helpers/toggler-style-resolver';

@Injectable({
  providedIn: 'root'
})
export class AngTogglerService {

  constructor(
    @Inject(CONFIG_TOKEN) private readonly moduleConfig: AngTogglerConfigI
  ) { }

  getSizing(size: 'sm' | 'md' | 'lg', item?: CssVarEnum): TogglerSizingItemI | string | undefined {
    const sizing = this.moduleConfig.sizing?.[size];
    return item ? sizing?.[item] : sizing;
  }

  get sizing(): TogglerSizingI | undefined {
    return this.moduleConfig.sizing;
  }

  get moduleStyling(): TogglerStylingI {
    return this.moduleConfig.styling || {};
  }

  getThemeInheritance(theme: string): boolean {
    return !!this.moduleConfig.themesInheritance?.[theme];
  }

  getThemeStyles(theme?: string): TogglerStylingI {
    if (!theme) {
      return this.moduleStyling;
    }

    const themeStyles = this.moduleConfig.themes?.[theme] || {};
    const stylingToMerge = this.getThemeInheritance(theme)
      ? omit(
          this.moduleStyling,
          [
           ...themeStyles.border ? ['borderActive', 'borderInactive'] : []
          ]
        )
      : {};

    return Object.assign(
      {},
      stylingToMerge,
      themeStyles
    );
  }
}
