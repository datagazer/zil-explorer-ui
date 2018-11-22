import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'hash.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DsBlockService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public list(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/dsblocks').pipe(
      map((items) => items.map((item) => ({
        id: Number(item.BlockNum),
        timestamp: Math.floor(item.timestamp / 1000),
        miner: this._getAddressFromPublicKey(item.leaderPubKey),
        difficulty: item.difficulty
      })))
    );
  }

  private _getAddressFromPublicKey(publicKey: string): string {
    return sha256().update(publicKey, 'hex').digest('hex').slice(24);
  }
}
