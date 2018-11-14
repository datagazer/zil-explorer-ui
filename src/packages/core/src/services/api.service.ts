import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Injection Tokens
export const API_URL = new InjectionToken<string>('API_URL');

@Injectable()
export class ApiService {
  private _nextCallId: number = 1;

  public constructor(
    private readonly $httpClient: HttpClient,

    @Inject(API_URL)
    private readonly _apiUrl: string
  ) {}

  public getBlockchainInfo(): Observable<any> {
    const request = this._createRequest('GetBlockchainInfo');

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getDsBlocks(page: number = 1): Observable<any> {
    const request = this._createRequest('DSBlockListing', [page]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getTxBlocks(page: number = 1): Observable<any> {
    const request = this._createRequest('TxBlockListing', [page]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getDsBlock(id: number): Observable<any> {
    const request = this._createRequest('GetDsBlock', [id]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getTxBlock(id: number): Observable<any> {
    const request = this._createRequest('GetTxBlock', [id]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getRecentTransactions(): Observable<any> {
    const request = this._createRequest('GetRecentTransactions');

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getTransaction(id: string): Observable<any> {
    const request = this._createRequest('GetTransaction', [id]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getBalance(address: string): Observable<any> {
    const request = this._createRequest('GetBalance', [address]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  public getSmartContractState(address: string): Observable<any> {
    const request = this._createRequest('GetSmartContractState', [address]);

    return this.$httpClient.post<JsonRpcResponse<any>>(this._apiUrl, request).pipe(
      map(({ result }) => result)
    );
  }

  private _createRequest(method: string, params?: any[]): JsonRpcRequest {
    return { id: this._nextCallId++, jsonrpc: '2.0', method, params };
  }
}
