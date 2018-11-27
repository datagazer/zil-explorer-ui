import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent {
  public address: string = this.$activatedRoute.snapshot.params.address;

  public balance: any = this.$activatedRoute.snapshot.data.balance;
  public smartContracts: any[] = this.$activatedRoute.snapshot.data.smartContracts;

  public smartContractColumns: string[] = [
    'vname',
    'type',
    'value'
  ];

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
