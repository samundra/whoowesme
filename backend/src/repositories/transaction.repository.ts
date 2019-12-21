import {DefaultCrudRepository} from '@loopback/repository';
import {Transaction, TransactionRelations} from '../models';
import {TransactionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {
  constructor(
    @inject('datasources.Transaction') dataSource: TransactionDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
