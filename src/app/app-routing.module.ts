import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
          dsBlock: DsBlockResolver
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
    path: 'address/:address',
    component: AddressInfoComponent,

    resolve: {
      balance: BalanceResolver
    }
  },

  {
    path: 'smart-contracts/:address',
    component: SmartContractDetailComponent,

    resolve: {
      smartContractState: SmartContractStateResolver
    }
  },

  { path: '**', redirectTo: 'blockchain' }
]);

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})
export class AppRoutingModule {}
