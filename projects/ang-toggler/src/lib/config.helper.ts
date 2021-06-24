import { AngTogglerConfigI } from './ang-toggler.module';
import { TogglerSizingI } from './models/toggler-styling.interface';

const DEFAULT_SIZING: TogglerSizingI = {
  sm: {
    width: '50px',
    height: '28px',
    sliderSize: '23px'
  },
  md: {
    width: '60px',
    height: '34px',
    sliderSize: '26px'
  },
  lg: {
    width: '75px',
    height: '40px',
    sliderSize: '35px'
  }
};

export const populateDefault = (config: AngTogglerConfigI): AngTogglerConfigI => {
  return {
    ...config,
    sizing: config.sizing || DEFAULT_SIZING
  };
};
