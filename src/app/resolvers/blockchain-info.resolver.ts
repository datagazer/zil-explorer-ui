import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ZilliqaService } from '@zilliqa/core';
import { Observable } from 'rxjs';

@Injectable()
export class BlockchainInfoResolver implements Resolve<any> {
  public constructor(
    private readonly $zilliqa: ZilliqaService
  ) {}

  /** @implements Resolve */
  public resolve(): Observable<any> {
    return this.$zilliqa.getBlockchainInfo();
  }
}
