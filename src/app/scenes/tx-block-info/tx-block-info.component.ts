import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tx-block-info',
  templateUrl: './tx-block-info.component.html',
  styleUrls: ['./tx-block-info.component.scss']
})
export class TxBlockInfoComponent {
  public txBlock: any = this.$activatedRoute.snapshot.data.txBlock;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
