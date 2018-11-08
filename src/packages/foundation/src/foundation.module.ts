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
import { TileContentComponent } from './components/tile/tile-content.component';
import { TileTitleComponent } from './components/tile/tile-title.component';
import { TileComponent } from './components/tile/tile.component';

// Entry Components
import { LoadingScreenComponent } from './entry-components/loading-screen/loading-screen.component';
import { OverlayContainerComponent } from './entry-components/overlay-container/overlay-container.component';

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
  TileContentComponent,
  TileTitleComponent,
  TileComponent
];

export const ENTRY_COMPONENTS = [
  LoadingScreenComponent,
  OverlayContainerComponent
];

export const SERVICES = [
  LoadingService,
  OverlayService
];

@NgModule({
  imports: [DEPENDENCIES, MODULES],
  exports: [MODULES, COMPONENTS],
  declarations: [COMPONENTS, ENTRY_COMPONENTS],
  entryComponents: [ENTRY_COMPONENTS],
  providers: [SERVICES]
})
export class FoundationModule {}
