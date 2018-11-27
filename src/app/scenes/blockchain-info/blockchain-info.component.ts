import { Component } from '@angular/core';
import { ZilliqaService } from '@zilliqa/core';
import { Observable, timer } from 'rxjs';
import { map, publish, refCount, switchMap } from 'rxjs/operators';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.scss']
})
export class BlockchainInfoComponent {
  public blockchainInfo$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$zilliqa.getBlockchainInfo()),
    publish(),
    refCount()
  );

  public marketInfo$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$market.getInfo()),
    publish(),
    refCount()
  );

  public marketCharts$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$market.getCharts()),

    map((items) => ({
      transactionRate: [
        [
          'Date',
          'Transaction Rate'
        ],

        ...items.map((item) => [
          item.dayAdded,
          item.transactionRate
        ])
      ],

      zilPrice: [
        [
          'Date',
          'ZIL USD Price'
        ],

        ...items.map((item) => [
          item.dayAdded,
          item.zilPrice
        ])
      ]
    })),

    publish(),
    refCount()
  );

  public constructor(
    private readonly $market: MarketService,
    private readonly $zilliqa: ZilliqaService
  ) {}
}
