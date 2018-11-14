import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smart-contract-detail',
  templateUrl: './smart-contract-detail.component.html',
  styleUrls: ['./smart-contract-detail.component.scss']
})
export class SmartContractDetailComponent {
  public smartContractState: any[] = this.$activatedRoute.snapshot.data.smartContractState;

  public displayedColumns: string[] = [
    'type',
    'vname',
    'value'
  ];

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
