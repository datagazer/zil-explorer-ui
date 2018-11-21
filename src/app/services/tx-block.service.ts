import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TxBlockService {
  public constructor(
    private readonly $httpClient: HttpClient
  ) {}

  public list(): Observable<any[]> {
    return this.$httpClient.get<any[]>('/v1/txblocks');
  }
}
