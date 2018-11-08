import { NgModule } from '@angular/core';

// Dependencies
import { CoreModule } from '@zilliqa/core';
import { FoundationModule } from '@zilliqa/foundation';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OutletComponent } from './components/outlet/outlet.component';

// Resolvers
import { DsBlockResolver } from './resolvers/ds-block.resolver';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TxBlockResolver } from './resolvers/tx-block.resolver';

// Scenes
import { BlockListComponent } from './scenes/block-list/block-list.component';
import { BlockchainInfoComponent } from './scenes/blockchain-info/blockchain-info.component';
import { DsBlockInfoComponent } from './scenes/ds-block-info/ds-block-info.component';
import { TransactionInfoComponent } from './scenes/transaction-info/transaction-info.component';
import { TransactionListComponent } from './scenes/transaction-list/transaction-list.component';
import { TxBlockInfoComponent } from './scenes/tx-block-info/tx-block-info.component';

export const DEPENDENCIES = [
  CoreModule,
  FoundationModule
];

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  NavbarComponent,
  OutletComponent
];

export const RESOLVERS = [
  DsBlockResolver,
  TransactionResolver,
  TxBlockResolver
];

export const SCENES = [
  BlockListComponent,
  BlockchainInfoComponent,
  DsBlockInfoComponent,
  TransactionInfoComponent,
  TransactionListComponent,
  TxBlockInfoComponent
];

@NgModule({
  imports: [DEPENDENCIES, AppRoutingModule],
  declarations: [COMPONENTS, SCENES],
  providers: [RESOLVERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
