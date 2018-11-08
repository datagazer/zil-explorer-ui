import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@zilliqa/core';
import { Observable, timer } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  public recentTransactions$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$api.getRecentTransactions()),
    map(({ TxnHashes }) => (TxnHashes as string[]).map((hash) => ({ Hash: hash }))),
    share()
  );

  public displayedColumns: string[] = [
    'Hash'
  ];

  public constructor(
    private readonly $activatedRoute: ActivatedRoute,
    private readonly $router: Router,

    private readonly $api: ApiService
  ) {}

  public onNavigate(event: MouseEvent, commands: any[]): void {
    const { isCollapsed } = event.view.getSelection();

    if (isCollapsed) {
      this.$router.navigate(commands, { relativeTo: this.$activatedRoute });
    }
  }
}
