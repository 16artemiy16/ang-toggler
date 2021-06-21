export type borderStyle = 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

export interface BorderStylingObjI {
    color?: string;
    style?: borderStyle;
    width?: string;
}

export type borderStylingType = BorderStylingObjI | string;

export interface TogglerStylingI {
  colorSlider?: string;
  colorSliderInactive?: string;
  colorSliderActive?: string;
  colorBackground?: string;
  colorBackgroundInactive?: string;
  colorBackgroundActive?: string;
  border?: borderStylingType;
  borderActive?: borderStylingType;
  borderInactive?: borderStylingType;
}
