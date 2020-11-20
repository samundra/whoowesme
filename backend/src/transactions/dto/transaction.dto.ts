import { IsOptional, IsNotEmpty } from "class-validator";

export class CreateTransactionDto {
  @IsNotEmpty()
  amount: number;

  @IsOptional()
  description: string;

  @IsOptional()
  date: Date;

  @IsOptional()
  categories: string[];
}
