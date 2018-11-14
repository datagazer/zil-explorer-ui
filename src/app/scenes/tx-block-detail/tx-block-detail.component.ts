import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tx-block-detail',
  templateUrl: './tx-block-detail.component.html',
  styleUrls: ['./tx-block-detail.component.scss']
})
export class TxBlockDetailComponent {
  public txBlock: any = this.$activatedRoute.snapshot.data.txBlock;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
