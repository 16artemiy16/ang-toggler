import { TogglerStylingI } from '../../../../../models/toggler-styling.interface';

export abstract class TogglerElemStyleResolver {
  protected nativeEl: HTMLElement;

  constructor(nativeEl: HTMLElement) {
    this.nativeEl = nativeEl;
  }

  abstract getClasses(): Record<string, boolean>;
  abstract getStyles(styling: TogglerStylingI, isActive: boolean): Record<string, string>;
}
