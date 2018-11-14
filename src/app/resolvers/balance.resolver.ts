import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '@zilliqa/core';
import { Observable } from 'rxjs';

@Injectable()
export class BalanceResolver implements Resolve<any> {
  public constructor(
    private readonly $api: ApiService
  ) {}

  /** @implements Resolve */
  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.$api.getBalance(route.params.address);
  }
}
