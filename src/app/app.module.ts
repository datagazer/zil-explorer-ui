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
import { SmartContractStateResolver } from './resolvers/smart-contract-state.resolver';
import { TransactionResolver } from './resolvers/transaction.resolver';
import { TxBlockResolver } from './resolvers/tx-block.resolver';

// Scenes
import { AddressInfoComponent } from './scenes/address-info/address-info.component';
import { BlockListComponent } from './scenes/block-list/block-list.component';
import { BlockchainInfoComponent } from './scenes/blockchain-info/blockchain-info.component';
import { DsBlockDetailComponent } from './scenes/ds-block-detail/ds-block-detail.component';
import { SmartContractDetailComponent } from './scenes/smart-contract-detail/smart-contract-detail.component';
import { TransactionDetailComponent } from './scenes/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './scenes/transaction-list/transaction-list.component';
import { TxBlockDetailComponent } from './scenes/tx-block-detail/tx-block-detail.component';

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
  SmartContractStateResolver,
  TransactionResolver,
  TxBlockResolver
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

@NgModule({
  imports: [DEPENDENCIES, AppRoutingModule],
  declarations: [COMPONENTS, SCENES],
  providers: [RESOLVERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
