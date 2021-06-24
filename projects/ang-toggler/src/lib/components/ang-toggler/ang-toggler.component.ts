import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Input
} from '@angular/core';
import { CssVarEnum, TogglerStyleResolver } from './helpers/toggler-style-resolver';
import { TogglerStylingI } from '../../models/toggler-styling.interface';
import { STYLE_RESOLVER, STYLE_RESOLVER_PROVIDERS } from './providers/toggler-style-resolver.provider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AngTogglerService } from '../../ang-toggler.service';
import { mergeObjects } from '../../utils/object.utils';

@Component({
  selector: 'ang-toggler, ang-toggler[tgl-square] ang-toggler[theme]',
  templateUrl: './ang-toggler.component.html',
  styleUrls: ['./ang-toggler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input()
  styling: TogglerStylingI = {};

  @Input() set disabled(v: boolean | string) {
    this.setDisabledState(v === true || v === '');
  }

  @Input() set width(v: string) {
    this.styleResolver.setCssVar(CssVarEnum.Width, v);
  }

  @Input() set height(v: string) {
    this.styleResolver.setCssVar(CssVarEnum.Height, v);
  }

  @Input() set size(v: 'sm' | 'md' | 'lg') {
    this.setSizing(v);
  }

  isActive = false;
  isDisabled = false;

  private onChange = (v: boolean) => {};
  private onTouched = () => {};

  constructor(
    @Inject(STYLE_RESOLVER) private readonly styleResolver: TogglerStyleResolver,
    private readonly togglerService: AngTogglerService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly el: ElementRef
  ) {
    this.setSizing();
  }

  private get resultStyling(): TogglerStylingI {
    return mergeObjects(
      this.togglerService.getThemeStyles(this.theme),
      this.styling
    );
  }

  private get theme(): string | undefined {
    return this.el.nativeElement.getAttribute('theme');
  }

  private setSizing(v: 'sm' | 'md' | 'lg' = 'md'): void {
    [CssVarEnum.Width, CssVarEnum.Height]
      .forEach((item) => {
        const val = this.togglerService.getSizing(v, item) as string;
        if (val) {
          this.styleResolver.setCssVar(item, val);
        }
      });
  }

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
    this.changeDetectorRef.markForCheck();
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  getClasses(elem: 'switch' | 'slider'): Record<string, boolean> {
    return this.styleResolver.for(elem).getClasses();
  }

  getStyles(elem: 'switch' | 'slider'): Record<string, string> {
    return this.styleResolver.for(elem).getStyles(this.resultStyling, this.isActive, this.isDisabled);
  }
}
