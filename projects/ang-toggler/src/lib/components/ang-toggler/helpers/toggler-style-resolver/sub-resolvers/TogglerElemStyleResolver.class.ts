import { TogglerStylingI } from '../../../../../models/toggler-styling.interface';

export abstract class TogglerElemStyleResolver {
  protected nativeEl: HTMLElement;

  constructor(nativeEl: HTMLElement) {
    this.nativeEl = nativeEl;
  }

  get switchEl(): HTMLElement {
    return this.nativeEl.querySelector('.switch') as HTMLElement;
  }

  get isOuter(): boolean {
    return this.nativeEl.classList.contains('outer');
  }

  abstract getClasses(): Record<string, boolean>;
  abstract getStyles(styling: TogglerStylingI, isActive: boolean, isDisabled: boolean): Record<string, string>;
}
