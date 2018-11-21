import { PortalHostDirective } from '@angular/cdk/portal';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'zil-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.scss']
})
export class OverlayContainerComponent {
  @ViewChild(PortalHostDirective)
  public readonly portalHost!: PortalHostDirective;
}
