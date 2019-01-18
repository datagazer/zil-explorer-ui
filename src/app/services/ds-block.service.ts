import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'hash.js';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DsBlockService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public getDsBlocks(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/dsblocks').pipe(
      map((items) => items.map((item) => ({
        id: Number(item.BlockNum),
        timestamp: Math.floor(item.Timestamp / 1000),
        miner: this._getAddressFromPublicKey(item.LeaderPubKey),
        difficulty: item.Difficulty,
        dsDifficulty: item.DifficultyDS
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
        reward: Number(item.Rewards) * Math.pow(10, -12),
        dsBlockId: Number(item.DSBlockNum)
      })))
    );
  }

  private _getAddressFromPublicKey(publicKey: string): string {
    return sha256().update(publicKey.substring(2), 'hex').digest('hex').slice(24);
  }
}
