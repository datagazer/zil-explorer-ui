import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ds-block-info',
  templateUrl: './ds-block-info.component.html',
  styleUrls: ['./ds-block-info.component.scss']
})
export class DsBlockInfoComponent {
  public dsBlock: any = this.$activatedRoute.snapshot.data.dsBlock;

  public constructor(
    private readonly $activatedRoute: ActivatedRoute
  ) {}
}
