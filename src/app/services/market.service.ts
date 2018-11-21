import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MarketService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getInfo(): Observable<any> {
    return this.$httpClient.get<any>('/v1/zilprice');
  }
}
