import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Options, chart } from 'highcharts';

@Directive({
  selector: '[zilLineChart]'
})
export class LineChartDirective implements OnChanges {
  @Input()
  public readonly options: Options;

  public constructor(
    private readonly _elementRef: ElementRef
  ) {}

  /** @implements OnChanges */
  public ngOnChanges(changes: SimpleChanges): void {
    if ('options' in changes) {
      const { options: { currentValue } } = changes;

      if (currentValue) {
        this._draw(currentValue);
      }
    }
  }

  private _draw(options: Options): void {
    chart(this._elementRef.nativeElement, {
      ...options,

      chart: {
        type: 'line'
      },

      title: null,

      credits: {
        enabled: false
      }
    });
  }
}
