import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Resolvers
import { BalanceResolver } from './resolvers/balance.resolver';
import { BlockchainInfoResolver } from './resolvers/blockchain-info.resolver';
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
import { HistoryComponent } from './scenes/history/history.component';
import { ShardCheckComponent } from './scenes/shard-check/shard-check.component';
import { SmartContractDetailComponent } from './scenes/smart-contract-detail/smart-contract-detail.component';
import { TransactionDetailComponent } from './scenes/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './scenes/transaction-list/transaction-list.component';
import { TxBlockDetailComponent } from './scenes/tx-block-detail/tx-block-detail.component';

export const ROUTES = RouterModule.forRoot([
  {
    path: 'blockchain',
    component: BlockchainInfoComponent
  },

  {
    path: 'blocks',

    children: [
      {
        path: '',
        component: BlockListComponent
      },

      {
        path: 'ds/:id',
        component: DsBlockDetailComponent,

        resolve: {
          dsBlock: DsBlockResolver,
          txBlocks: TxBlocksResolver
        }
      },

      {
        path: 'tx/:id',
        component: TxBlockDetailComponent,

        resolve: {
          txBlock: TxBlockResolver
        }
      }
    ]
  },

  {
    path: 'transactions',

    children: [
      {
        path: '',
        component: TransactionListComponent
      },

      {
        path: ':id',
        component: TransactionDetailComponent,

        resolve: {
          transaction: TransactionResolver
        }
      }
    ]
  },

  {
    path: 'history',
    component: HistoryComponent
  },

  {
    path: 'shard-check',

    children: [
      {
        path: '',
        component: ShardCheckComponent,

        resolve: {
          blockchainInfo: BlockchainInfoResolver
        }
      }
    ]
  },

  {
    path: 'address/:address',
    component: AddressInfoComponent,

    resolve: {
      balance: BalanceResolver,
      smartContracts: SmartContractsResolver
    }
  },

  {
    path: 'smart-contracts/:address',
    component: SmartContractDetailComponent,

    resolve: {
      smartContractInit: SmartContractInitResolver,
      smartContractState: SmartContractStateResolver,
      smartContractCode: SmartContractCodeResolver
    }
  },

  { path: '**', redirectTo: 'blockchain' }
]);

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})
export class AppRoutingModule {}
