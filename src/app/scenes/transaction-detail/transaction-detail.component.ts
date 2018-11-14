import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent {
  public transaction: any = this.$activatedRoute.snapshot.data.transaction;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
