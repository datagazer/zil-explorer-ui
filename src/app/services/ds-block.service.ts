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

  public getDsBlocks(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/dsblocks').pipe(
      map((items) => items.map((item) => ({
        id: Number(item.BlockNum),
        timestamp: Math.floor(item.timestamp / 1000),
        miner: this._getAddressFromPublicKey(item.leaderPubKey),
        difficulty: item.difficulty
      })))
    );
  }

  public getTxBlocks(id: number): Observable<any[]> {
    return this.$httpClient.get<any[]>(`/v1/dsblocks/${id}/txblocks`).pipe(
      map((items) => items.map((item) => ({
        id: Number(item.BlockNum),
        timestamp: Math.floor(item.Timestamp / 1000),
        txCount: item.NumTxns,
        miner: this._getAddressFromPublicKey(item.MinerPubKey),
        reward: Number(item.Rewards),
        dsBlockId: Number(item.DSBlockNum)
      })))
    );
  }

  private _getAddressFromPublicKey(publicKey: string): string {
    return sha256().update(publicKey, 'hex').digest('hex').slice(24);
  }
}
