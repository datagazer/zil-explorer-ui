import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ds-block-detail',
  templateUrl: './ds-block-detail.component.html',
  styleUrls: ['./ds-block-detail.component.scss']
})
export class DsBlockDetailComponent {
  public dsBlock: any = this.$activatedRoute.snapshot.data.dsBlock;
  public txBlocks: any[] = this.$activatedRoute.snapshot.data.txBlocks;

  public txBlockColumns: string[] = [
    'id',
    'timestamp',
    'txCount',
    'miner',
    'reward'
  ];

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
