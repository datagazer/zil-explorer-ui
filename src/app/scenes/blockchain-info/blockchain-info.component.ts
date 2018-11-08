import { Component } from '@angular/core';
import { ApiService } from '@zilliqa/core';
import { Observable, timer } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.scss']
})
export class BlockchainInfoComponent {
  public blockchainInfo$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$api.getBlockchainInfo()),
    share()
  );

  public constructor(
    private readonly $api: ApiService
  ) {}
}
