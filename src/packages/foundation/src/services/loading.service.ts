import { OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delayWhen, map } from 'rxjs/operators';
import { LoadingScreenComponent } from '../entry-components/loading-screen/loading-screen.component';
import { OverlayService } from './overlay.service';

@Injectable()
export class LoadingService {
  public constructor(
    private readonly $overlay: OverlayService
  ) {}

  public create(): OverlayRef {
    return this.$overlay.create(LoadingScreenComponent);
  }

  public register(startEvent: Observable<any>, endEvent: Observable<any>): void {
    const overlayRef$ = startEvent.pipe(
      map(() => this.create()),
      delayWhen(() => endEvent)
    );

    overlayRef$.subscribe((overlayRef) => {
      overlayRef.dispose();
    });
  }
}
