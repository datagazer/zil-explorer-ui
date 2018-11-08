import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@zilliqa/core';
import { Observable, timer } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent {
  public dsBlocks$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$api.getDsBlocks()),
    map(({ data }) => data),
    share()
  );

  public txBlocks$: Observable<any> = timer(0, 60000).pipe(
    switchMap(() => this.$api.getTxBlocks()),
    map(({ data }) => data),
    share()
  );

  public displayedColumns: string[] = [
    'BlockNum',
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
