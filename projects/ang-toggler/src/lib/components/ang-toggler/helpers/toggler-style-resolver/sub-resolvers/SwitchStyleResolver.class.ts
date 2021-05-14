import { TogglerDynamicClsEnum } from '../../../../../models/toggler-dynamic-cls.enum';
import { TogglerAttrEnum } from '../../../../../models/toggler-attr.enum';
import {
  BorderStylingObjI,
  borderStylingType,
  TogglerStylingI
} from '../../../../../models/toggler-styling.interface';
import { TogglerElemStyleResolver } from './TogglerElemStyleResolver.class';

export class SwitchStyleResolver extends TogglerElemStyleResolver {
  static formBorderStyle(styling: TogglerStylingI, isActive: boolean): Record<string, string> {
    const { border = '', borderActive, borderInactive } = styling;
    const borderByActivity = (isActive ? borderActive : borderInactive) || {};

    const mapStyles = (borderItem: borderStylingType, defaultBorder?: borderStylingType) => ({
      ...typeof borderItem === 'string' && {
        border: borderItem
      },
      ...typeof borderItem === 'object' && {
        borderWidth: borderItem?.width ?? (defaultBorder as BorderStylingObjI).width ?? '',
        borderStyle: borderItem?.style ?? (defaultBorder as BorderStylingObjI).style ?? '',
        borderColor: borderItem?.color ?? (defaultBorder as BorderStylingObjI).color ?? '',
      }
    });

    const resultBorder = Object.keys(borderByActivity || {}).length
      ? borderByActivity
      : border;

    return mapStyles(resultBorder, border);
  }

  static formBackgroundStyle(styling: TogglerStylingI, isActive: boolean): Record<string, string> {
    const { colorBackground, colorBackgroundActive, colorBackgroundInactive } = styling;
    return {
      background: (isActive ? colorBackgroundActive : colorBackgroundInactive) || colorBackground || ''
    };
  }

  getClasses(): Record<string, boolean> {
    return {
      [TogglerDynamicClsEnum.Square]: this.nativeEl.hasAttribute(TogglerAttrEnum.TglSquare)
    };
  }

  getStyles(styling: TogglerStylingI, isActive: boolean, isDisabled: boolean): Record<string, string> {
    return {
      cursor: isDisabled ? 'not-allowed' : '',
      ...SwitchStyleResolver.formBackgroundStyle(styling, isActive),
      ...SwitchStyleResolver.formBorderStyle(styling, isActive)
    };
  }
}
