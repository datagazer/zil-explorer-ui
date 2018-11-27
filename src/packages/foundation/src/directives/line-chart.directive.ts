import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[zilLineChart]'
})
export class LineChartDirective implements OnChanges {
  @Input()
  public readonly data: any[];

  public constructor(
    private readonly _elementRef: ElementRef
  ) {}

  /** @implements OnChanges */
  public ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      const { data: { currentValue } } = changes;

      if (currentValue) {
        this._draw(currentValue);
      }
    }
  }

  @HostListener('window:resize')
  public onResize(): void {
    this._draw(this.data);
  }

  private _draw(data: any[]): void {
    const chart = new google.charts.Line(this._elementRef.nativeElement);

    chart.draw(google.visualization.arrayToDataTable(data), {
      legend: { position: 'none' }
    });
  }
}
