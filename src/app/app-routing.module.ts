import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        component: DsBlockInfoComponent,

        resolve: {
          dsBlock: DsBlockResolver
        }
      },

      {
        path: 'tx/:id',
        component: TxBlockInfoComponent,

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
        component: TransactionInfoComponent,

        resolve: {
          transaction: TransactionResolver
        }
      }
    ]
  },

  { path: '**', redirectTo: 'blockchain' }
]);

@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})
export class AppRoutingModule {}
