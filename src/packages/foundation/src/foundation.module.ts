import { NgModule } from '@angular/core';

// Dependencies
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

// Modules
import { MaterialModule } from '@zilliqa/material';

// Components
import { LayoutColumnComponent } from './components/layout/layout-column.component';
import { LayoutContainerComponent } from './components/layout/layout-container.component';
import { LayoutGridCellComponent } from './components/layout/layout-grid-cell.component';
import { LayoutGridComponent } from './components/layout/layout-grid.component';
import { LayoutRowComponent } from './components/layout/layout-row.component';
import { LinkComponent } from './components/link/link.component';
import { TileContentComponent } from './components/tile/tile-content.component';
import { TileTitleComponent } from './components/tile/tile-title.component';
import { TileComponent } from './components/tile/tile.component';

// Entry Components
import { LoadingScreenComponent } from './entry-components/loading-screen/loading-screen.component';
import { OverlayContainerComponent } from './entry-components/overlay-container/overlay-container.component';

// Pipes
import { TimeAgoPipe } from './pipes/time-ago.pipe';

// Services
import { LoadingService } from './services/loading.service';
import { OverlayService } from './services/overlay.service';

export const DEPENDENCIES = [
  OverlayModule,
  PortalModule
];

export const MODULES = [
  MaterialModule
];

export const COMPONENTS = [
  LayoutColumnComponent,
  LayoutContainerComponent,
  LayoutGridCellComponent,
  LayoutGridComponent,
  LayoutRowComponent,
  LinkComponent,
  TileContentComponent,
  TileTitleComponent,
  TileComponent
];

export const ENTRY_COMPONENTS = [
  LoadingScreenComponent,
  OverlayContainerComponent
];

export const PIPES = [
  TimeAgoPipe
];

export const SERVICES = [
  LoadingService,
  OverlayService
];

@NgModule({
  imports: [DEPENDENCIES, MODULES],
  exports: [MODULES, COMPONENTS, ENTRY_COMPONENTS, PIPES],
  declarations: [COMPONENTS, ENTRY_COMPONENTS, PIPES],
  entryComponents: [ENTRY_COMPONENTS],
  providers: [SERVICES]
})
export class FoundationModule {}
