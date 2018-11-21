import { Component } from '@angular/core';
import { ApiService } from '@zilliqa/core';
import { Observable, timer } from 'rxjs';
import { publish, refCount, switchMap } from 'rxjs/operators';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.scss']
})
export class BlockchainInfoComponent {
  public blockchainInfo$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$api.getBlockchainInfo()),
    publish(),
    refCount()
  );

  public marketInfo$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$market.getInfo()),
    publish(),
    refCount()
  );

  public constructor(
    private readonly $api: ApiService,
    private readonly $market: MarketService
  ) {}
}
