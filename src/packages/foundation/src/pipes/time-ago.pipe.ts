import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  private _currentDate: Date = new Date();

  /** @implements PipeTransform */
  public transform(value: any): string {
    let diff = (this._currentDate.getTime() - new Date(value).getTime()) / 1000;

    switch (true) {
      case diff < 60: {
        return `${Math.floor(diff)} second(s) ago`;
      }

      case (diff /= 60) < 60: {
        return `${Math.floor(diff)} minute(s) ago`;
      }

      case (diff /= 60) < 24: {
        return `${Math.floor(diff)} hour(s) ago`;
      }

      case (diff /= 24) < 7: {
        return `${Math.floor(diff)} day(s) ago`;
      }

      case (diff /= 7) < 4: {
        return `${Math.floor(diff)} week(s) ago`;
      }

      case (diff /= 4) < 12: {
        return `${Math.floor(diff)} month(s) ago`;
      }

      default: {
        return `${Math.floor(diff / 12)} year(s) ago`;
      }
    }
  }
}
