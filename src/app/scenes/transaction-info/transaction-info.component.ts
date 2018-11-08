import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.scss']
})
export class TransactionInfoComponent {
  public transaction: any = this.$activatedRoute.snapshot.data.transaction;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
