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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TitleComponent } from './components/title/title.component';

// Resolvers
import { BalanceResolver } from './resolvers/balance.resolver';
import { DsBlockResolver } from './resolvers/ds-block.resolver';
import { SmartContractCodeResolver } from './resolvers/smart-contract-code.resolver';
import { SmartContractInitResolver } from './resolvers/smart-contract-init.resolver';
import { SmartContractStateResolver } from './resolvers/smart-contract-state.resolver';
import { SmartContractsResolver } from './resolvers/smart-contracts.resolver';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TxBlockResolver } from './resolvers/tx-block.resolver';
import { TxBlocksResolver } from './resolvers/tx-blocks.resolver';

// Scenes
import { AddressInfoComponent } from './scenes/address-info/address-info.component';
import { BlockListComponent } from './scenes/block-list/block-list.component';
import { BlockchainInfoComponent } from './scenes/blockchain-info/blockchain-info.component';
import { DsBlockDetailComponent } from './scenes/ds-block-detail/ds-block-detail.component';
import { SmartContractDetailComponent } from './scenes/smart-contract-detail/smart-contract-detail.component';
import { TransactionDetailComponent } from './scenes/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './scenes/transaction-list/transaction-list.component';
import { TxBlockDetailComponent } from './scenes/tx-block-detail/tx-block-detail.component';

// Services
import { DsBlockService } from './services/ds-block.service';
import { MarketService } from './services/market.service';
import { TransactionService } from './services/transaction.service';
import { TxBlockService } from './services/tx-block.service';

export const DEPENDENCIES = [
  CoreModule,
  FoundationModule
];

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  NavbarComponent,
  OutletComponent,
  SearchBarComponent,
  TitleComponent
];

export const RESOLVERS = [
  BalanceResolver,
  DsBlockResolver,
  SmartContractCodeResolver,
  SmartContractInitResolver,
  SmartContractStateResolver,
  SmartContractsResolver,
  TransactionResolver,
  TxBlockResolver,
  TxBlocksResolver
];

export const SCENES = [
  AddressInfoComponent,
  BlockListComponent,
  BlockchainInfoComponent,
  DsBlockDetailComponent,
  SmartContractDetailComponent,
  TransactionDetailComponent,
  TransactionListComponent,
  TxBlockDetailComponent
];

export const SERVICES = [
  DsBlockService,
  MarketService,
  TransactionService,
  TxBlockService
];

@NgModule({
  imports: [DEPENDENCIES, AppRoutingModule],
  declarations: [COMPONENTS, SCENES],
  providers: [RESOLVERS, SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}
