import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, publish, refCount, switchMap } from 'rxjs/operators';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  public marketCharts$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$market.getFullCharts()),

    map((items) => ({
      transactionNum: {
        series: [
          {
            name: 'Transaction Number',

            data: items.map((item) => [
              item.dayAdded,
              item.transactionNum
            ])
          }
        ],

        xAxis: {
          type: 'datetime'
        },

        yAxis: {
          type: 'linear',
          title: null
        },

        legend: {
          enabled: false
        }
      },

      dsMiningDifficulty: {
        series: [
          {
            name: 'DS Mining Difficulty',

            data: items.map((item) => [
              item.dayAdded,
              item.dsMiningDifficulty
            ])
          }
        ],

        xAxis: {
          type: 'datetime'
        },

        yAxis: {
          type: 'linear',
          title: null
        },

        legend: {
          enabled: false
        }
      },

      txMiningDifficulty: {
        series: [
          {
            name: 'TX Mining Difficulty',

            data: items.map((item) => [
              item.dayAdded,
              item.txMiningDifficulty
            ])
          }
        ],

        xAxis: {
          type: 'datetime'
        },

        yAxis: {
          type: 'linear',
          title: null
        },

        legend: {
          enabled: false
        }
      },

      zilPrice: {
        series: [
          {
            name: 'ZIL USD Price',

            data: items.map((item) => [
              item.dayAdded,
              item.zilPrice
            ])
          }
        ],

        xAxis: {
          type: 'datetime'
        },

        yAxis: {
          type: 'linear',
          title: null
        },

        legend: {
          enabled: false
        }
      }
    })),

    publish(),
    refCount()
  );

  public constructor(
    private readonly $market: MarketService
  ) {}
}
