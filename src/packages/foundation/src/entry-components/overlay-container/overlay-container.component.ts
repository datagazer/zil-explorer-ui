import { PortalHostDirective } from '@angular/cdk/portal';
import { Component, HostBinding, ViewChild } from '@angular/core';
import { ClassList } from '@zilliqa/core';

@Component({
  selector: 'zil-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent {
  @HostBinding('class')
  public readonly classList: ClassList = new ClassList([
    'mat-app-background',
    'mat-typography'
  ]);

  @ViewChild(PortalHostDirective)
  public readonly portalHost!: PortalHostDirective;
}
