import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MarketService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getInfo(): Observable<any> {
    return this.$httpClient.get<any>('/v1/mainpage');
  }

  public getCharts(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/charts').pipe(
      map((items) => items.map((item) => ({
        dayAdded: new Date(item.dayAdded).getTime(),
        zilPrice: item.zilPrice,
        transactionNum: item.transactionNum,
        dsMiningDifficulty: item.dsMiningDifficulty,
        txMiningDifficulty: item.txMiningDifficulty
      })))
    );
  }

  public getFullCharts(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/charts/full').pipe(
      map((items) => items.map((item) => ({
        dayAdded: new Date(item.dayAdded).getTime(),
        zilPrice: item.zilPrice,
        transactionNum: item.transactionNum,
        dsMiningDifficulty: item.dsMiningDifficulty,
        txMiningDifficulty: item.txMiningDifficulty
      })))
    );
  }
}
