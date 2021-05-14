import { Component, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { TogglerStyleResolver } from './helpers/toggler-style-resolver';
import { TogglerStylingI } from '../../models/toggler-styling.interface';
import { STYLE_RESOLVER, STYLE_RESOLVER_PROVIDERS } from './providers/toggler-style-resolver.provider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ang-toggler, ang-toggler[tgl-square]',
  templateUrl: './ang-toggler.component.html',
  styleUrls: ['./ang-toggler.component.scss'],
  providers: [
    STYLE_RESOLVER_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AngTogglerComponent),
      multi: true
    }
  ]
})
export class AngTogglerComponent implements ControlValueAccessor {
  @Input() styling: TogglerStylingI = {
    colorSliderInactive: 'red',
    colorSliderActive: 'green',
    colorBackgroundInactive: '#cdc7c7',
    colorBackgroundActive: '#16ff00',
    border: {
      color: 'grey',
      width: '3px',
      style: 'dotted'
    },
    borderActive: {
      color: 'black',
      width: '3px',
    },
    borderInactive: {
      width: '3px',
      style: 'solid'
    }
  };

  isActive = false;
  isDisabled = false;

  private onChange = (v: boolean) => {};
  private onTouched = () => {};

  constructor(
    @Inject(STYLE_RESOLVER) private readonly styleResolver: TogglerStyleResolver
  ) {}


  @HostListener('click')
  toggle(): void {
    if (!this.isDisabled) {
      this.isActive = !this.isActive;
      this.onTouched();
      this.onChange(this.isActive);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(v: boolean): void {
    this.isActive = v;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getClasses(elem: 'switch' | 'slider'): Record<string, boolean> {
    return this.styleResolver.for(elem).getClasses();
  }

  getStyles(elem: 'switch' | 'slider'): Record<string, string> {
    return this.styleResolver.for(elem).getStyles(this.styling, this.isActive, this.isDisabled);
  }
}
