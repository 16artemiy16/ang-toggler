import { SliderStyleResolver } from './sub-resolvers/SliderStyleResolver.class';
import { SwitchStyleResolver } from './sub-resolvers/SwitchStyleResolver.class';
import { TogglerElemStyleResolver } from './sub-resolvers/TogglerElemStyleResolver.class';

export enum CssVarEnum {
  Width = 'width',
  Height = 'height'
}

const CSS_VAR_MAP = {
  [CssVarEnum.Width]: '--switch-width',
  [CssVarEnum.Height]: '--switch-height'
};

export class TogglerStyleResolver {
  private readonly sliderSR: SliderStyleResolver;
  private readonly switchSR: SwitchStyleResolver;

  constructor(protected nativeEl: HTMLElement) {
    this.sliderSR = new SliderStyleResolver(nativeEl);
    this.switchSR = new SwitchStyleResolver(nativeEl);
  }

  for(elem: 'slider' | 'switch'): TogglerElemStyleResolver {
    return {
      slider: this.sliderSR,
      switch: this.switchSR
    }[elem];
  }

  setCssVar(cssVar: CssVarEnum, value: string): void {
    if (value?.trim()) {
      this.nativeEl.style.setProperty(CSS_VAR_MAP[cssVar], value);
    }
  }
}
