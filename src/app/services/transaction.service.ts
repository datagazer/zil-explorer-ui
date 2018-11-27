import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'hash.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransactionService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getTransactions(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/transactions').pipe(
      map((items) => items.map((item) => ({
        id: item.ID,
        timestamp: item.timestamp,
        addressFrom: this._getAddressFromPublicKey(item.senderPubKey),
        addressTo: item.toAddr,
        value: Number(item.amount)
      })))
    );
  }

  private _getAddressFromPublicKey(publicKey: string): string {
    return sha256().update(publicKey, 'hex').digest('hex').slice(24);
  }
}
