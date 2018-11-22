import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { publish, refCount, switchMap } from 'rxjs/operators';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  public transactions$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$transaction.list()),
    publish(),
    refCount()
  );

  public transactionColumns: string[] = [
    'id',
    'timestamp',
    'addressFrom',
    'addressTo',
    'value'
  ];

  public constructor(
    private readonly $transaction: TransactionService
  ) {}
}
