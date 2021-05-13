import { TogglerAttrEnum } from './models/toggler-attr.enum';
import { TogglerDynamicClsEnum } from './models/toggler-dynamic-cls.enum';

export class TogglerStyleResolver {
  private nativeEl: HTMLElement;

  constructor(nativeEl: HTMLElement) {
    this.nativeEl = nativeEl;
  }

  get sliderClassObj(): Record<TogglerDynamicClsEnum, boolean> {
    return {
      [TogglerDynamicClsEnum.Square]: this.nativeEl.hasAttribute(TogglerAttrEnum.TglSquare)
    };
  }
}
