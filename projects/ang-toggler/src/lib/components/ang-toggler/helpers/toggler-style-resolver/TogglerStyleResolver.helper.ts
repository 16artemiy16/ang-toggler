import { SliderStyleResolver } from './sub-resolvers/SliderStyleResolver.class';
import { SwitchStyleResolver } from './sub-resolvers/SwitchStyleResolver.class';
import { TogglerElemStyleResolver } from './sub-resolvers/TogglerElemStyleResolver.class';

export class TogglerStyleResolver {
  private readonly sliderSR: SliderStyleResolver;
  private readonly switchSR: SwitchStyleResolver;

  constructor(nativeEl: HTMLElement) {
    this.sliderSR = new SliderStyleResolver(nativeEl);
    this.switchSR = new SwitchStyleResolver(nativeEl);
  }

  for(elem: 'slider' | 'switch'): TogglerElemStyleResolver {
    return {
      slider: this.sliderSR,
      switch: this.switchSR
    }[elem];
  }
}
