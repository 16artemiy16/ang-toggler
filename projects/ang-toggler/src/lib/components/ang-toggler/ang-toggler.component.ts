import { Component, Inject, Input, OnInit } from '@angular/core';
import { TogglerStyleResolver } from './helpers/toggler-style-resolver';
import { TogglerStylingI } from '../../models/toggler-styling.interface';
import { STYLE_RESOLVER, STYLE_RESOLVER_PROVIDERS } from './toggler-style-resolver.provider';

@Component({
  selector: 'ang-toggler, ang-toggler[tgl-square]',
  templateUrl: './ang-toggler.component.html',
  styleUrls: ['./ang-toggler.component.scss'],
  providers: [STYLE_RESOLVER_PROVIDERS]
})
export class AngTogglerComponent implements OnInit {
  @Input() styling: TogglerStylingI = {
    colorSliderInactive: 'red',
    colorSliderActive: 'green',
    colorBackgroundInactive: '#cdc7c7',
    colorBackgroundActive: '#16ff00'
  };

  isActive = false;

  constructor(
    @Inject(STYLE_RESOLVER) private readonly styleResolver: TogglerStyleResolver
  ) {}

  getClasses(elem: 'switch' | 'slider'): Record<string, boolean> {
    return this.styleResolver.for(elem).getClasses();
  }

  getStyles(elem: 'switch' | 'slider'): Record<string, string> {
    return this.styleResolver.for(elem).getStyles(this.styling, this.isActive);
  }

  ngOnInit(): void {
  }

}
