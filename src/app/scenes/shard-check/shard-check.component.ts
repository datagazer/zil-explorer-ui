import { Component } from '@angular/core';

@Component({
  selector: 'app-shard-check',
  templateUrl: './shard-check.component.html',
  styleUrls: ['./shard-check.component.scss']
})
export class ShardCheckComponent {
  public wallet: string;
  public smartContract: string;

  public result: boolean = null;

  public onCheck(): void {
    this.result = this.wallet.substr(-1) === this.smartContract.substr(-1);
  }
}
