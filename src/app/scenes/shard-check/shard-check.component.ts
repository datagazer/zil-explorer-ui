import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shard-check',
  templateUrl: './shard-check.component.html',
  styleUrls: ['./shard-check.component.scss']
})
export class ShardCheckComponent {
  public shardsCount: number = this.$activatedRoute.snapshot.data.blockchainInfo.ShardingStructure.NumPeers.length - 1;

  public wallet: string = 'daceb510e94510eb51f44af57db3b51e9ec1d4b4';
  public smartContract: string = '1153e741acb22416fe086b7ba7a678b1e16d295a';

  public result: boolean = null;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}

  public onCheck(): void {
    const bitCount = this.shardsCount > 0 ? Math.log2(this.shardsCount) : 0;

    if (bitCount) {
      const binWallet = this.wallet.match(/([0-9a-f]{2})/g).map((byte) => parseInt(byte, 16).toString(2).padStart(8, '0')).join('');
      const binSmartContract = this.smartContract.match(/([0-9a-f]{2})/g).map((byte) => parseInt(byte, 16).toString(2).padStart(8, '0')).join('');

      this.result = binWallet.substr(-bitCount) === binSmartContract.substr(-bitCount);
    } else {
      this.result = true;
    }
  }
}
