import { IsOptional, IsNotEmpty, IsString } from 'class-validator'

export class CreateTransactionDto {
  @IsNotEmpty()
  readonly amount: number

  @IsOptional()
  readonly description: string

  @IsOptional()
  readonly date: Date

  @IsString({ each: true })
  readonly categories: string[]
}
