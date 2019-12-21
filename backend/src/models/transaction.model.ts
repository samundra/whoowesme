import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transaction extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  Amount: number;

  @property({
    type: 'string',
  })
  Notes?: string;

  @property({
    type: 'number',
    required: true,
  })
  OwnerId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
