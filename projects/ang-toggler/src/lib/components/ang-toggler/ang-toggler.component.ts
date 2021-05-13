import { Component, ElementRef, OnInit } from '@angular/core';
import { TogglerStyleResolver } from '../../TogglerStyleResolver.helper';
import { TogglerDynamicClsEnum } from '../../models/toggler-dynamic-cls.enum';

@Component({
  selector: 'ang-toggler, ang-toggler[tgl-square]',
  templateUrl: './ang-toggler.component.html',
  styleUrls: ['./ang-toggler.component.scss']
})
export class AngTogglerComponent implements OnInit {
  private readonly styleResolver: TogglerStyleResolver = new TogglerStyleResolver(this.el.nativeElement);

  constructor(private readonly el: ElementRef) {}

  get sliderClassObj(): Record<TogglerDynamicClsEnum, boolean> {
    return this.styleResolver.sliderClassObj;
  }

  ngOnInit(): void {
  }

}
