import { NgModule } from '@angular/core';

// Dependencies
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

// Modules
import { LayoutModule } from '@datagazer/layout';
import { TypographyModule } from '@datagazer/typography';
import { MaterialModule } from '@zilliqa/material';
import { AceEditorModule } from 'ng2-ace-editor';

// Components
import { CardContentComponent } from './components/card/card-content.component';
import { CardTitleComponent } from './components/card/card-title.component';
import { CardComponent } from './components/card/card.component';
import { LinkComponent } from './components/link/link.component';
import { TileContentComponent } from './components/tile/tile-content.component';
import { TileTitleComponent } from './components/tile/tile-title.component';
import { TileComponent } from './components/tile/tile.component';

// Directives
import { LineChartDirective } from './directives/line-chart.directive';

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
  LayoutModule,
  TypographyModule,
  MaterialModule,
  AceEditorModule
];

export const COMPONENTS = [
  CardContentComponent,
  CardTitleComponent,
  CardComponent,
  LinkComponent,
  TileContentComponent,
  TileTitleComponent,
  TileComponent
];

export const DIRECTIVES = [
  LineChartDirective
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
  exports: [MODULES, COMPONENTS, DIRECTIVES, ENTRY_COMPONENTS, PIPES],
  declarations: [COMPONENTS, DIRECTIVES, ENTRY_COMPONENTS, PIPES],
  entryComponents: [ENTRY_COMPONENTS],
  providers: [SERVICES]
})
export class FoundationModule {}
