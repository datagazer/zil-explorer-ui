import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { OverlayContainerComponent } from '../entry-components/overlay-container/overlay-container.component';

// Injection Tokens
export const OVERLAY_DATA = new InjectionToken<any>('OVERLAY_DATA');

@Injectable()
export class OverlayService {
  public constructor(
    private readonly $injector: Injector,
    private readonly $overlay: Overlay
  ) {}

  public create<T>(component: ComponentType<T>, data?: any): OverlayRef {
    const overlayRef = this.$overlay.create({ width: '100vw', height: '100vh' });

    {
      const { instance: overlayContainerComponent } = overlayRef.attach(
        new ComponentPortal(OverlayContainerComponent, null, this._createInjector(data))
      );

      overlayContainerComponent.portalHost.attachComponentPortal(
        new ComponentPortal(component)
      );
    }

    return overlayRef;
  }

  private _createInjector(data: any): Injector {
    const customTokens = new WeakMap([
      [OVERLAY_DATA, data]
    ]);

    return new PortalInjector(this.$injector, customTokens);
  }
}
