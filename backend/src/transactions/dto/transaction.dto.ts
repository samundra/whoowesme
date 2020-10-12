export class CreateTransactionDto {
  amount: number;
  description: string;
  date: Date;
  categories: string[];
}
