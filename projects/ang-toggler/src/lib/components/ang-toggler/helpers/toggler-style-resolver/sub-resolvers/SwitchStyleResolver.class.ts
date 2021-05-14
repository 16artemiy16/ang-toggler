import { TogglerDynamicClsEnum } from '../../../../../models/toggler-dynamic-cls.enum';
import { TogglerAttrEnum } from '../../../../../models/toggler-attr.enum';
import { TogglerStylingI } from '../../../../../models/toggler-styling.interface';
import { TogglerElemStyleResolver } from './TogglerElemStyleResolver.class';

export class SwitchStyleResolver extends TogglerElemStyleResolver {
  getClasses(): Record<string, boolean> {
    return {
      [TogglerDynamicClsEnum.Square]: this.nativeEl.hasAttribute(TogglerAttrEnum.TglSquare)
    };
  }

  getStyles(styling: TogglerStylingI, isActive: boolean): Record<string, string> {
    const { colorBackground, colorBackgroundActive, colorBackgroundInactive } = styling;
    return {
      background: (isActive ? colorBackgroundActive : colorBackgroundInactive) || colorBackground || ''
    };
  }
}
