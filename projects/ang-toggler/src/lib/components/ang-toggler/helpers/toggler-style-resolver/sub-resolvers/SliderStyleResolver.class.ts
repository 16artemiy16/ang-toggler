import { TogglerStylingI } from '../../../../../models/toggler-styling.interface';
import { TogglerElemStyleResolver } from './TogglerElemStyleResolver.class';

export class SliderStyleResolver extends TogglerElemStyleResolver {
  getClasses(): Record<string, boolean> {
    return {};
  }

  getStyles(styling: TogglerStylingI, isActive: boolean, isDisabled: boolean): Record<string, string> {
    const { colorSlider, colorSliderActive, colorSliderInactive } = styling;
    return {
      background: (isActive ? colorSliderActive : colorSliderInactive) || colorSlider || ''
    };
  }
}
