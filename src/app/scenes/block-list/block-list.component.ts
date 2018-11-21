import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { publish, refCount, switchMap } from 'rxjs/operators';
import { DsBlockService } from '../../services/ds-block.service';
import { TxBlockService } from '../../services/tx-block.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent {
  public dsBlocks$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$dsBlock.list()),
    publish(),
    refCount()
  );

  public txBlocks$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$txBlock.list()),
    publish(),
    refCount()
  );

  public constructor(
    private readonly $dsBlock: DsBlockService,
    private readonly $txBlock: TxBlockService
  ) {}
}
