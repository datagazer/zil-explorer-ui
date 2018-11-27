import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DsBlockService } from '../services/ds-block.service';

@Injectable()
export class TxBlocksResolver implements Resolve<any[]> {
  public constructor(
    private readonly $dsBlock: DsBlockService
  ) {}

  /** @implements Resolve */
  public resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
    return this.$dsBlock.getTxBlocks(route.params.id);
  }
}
