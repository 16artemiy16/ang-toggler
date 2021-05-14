import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { TogglerStyleResolver } from './helpers/toggler-style-resolver';

export const STYLE_RESOLVER = new InjectionToken<TogglerStyleResolver>('Toggler Style Resolver');
export const STYLE_RESOLVER_PROVIDERS: Provider[] = [
  {
    provide: STYLE_RESOLVER,
    deps: [ElementRef],
    useFactory: styleResolverFactory
  }
];

export function styleResolverFactory({ nativeElement }: ElementRef): TogglerStyleResolver {
  return new TogglerStyleResolver(nativeElement);
}
