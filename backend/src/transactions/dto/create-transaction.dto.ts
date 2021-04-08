import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number

  @IsString()
  @IsOptional()
  readonly description?: string

  @IsDate()
  readonly date: Date
  /**
   * A list of categories that transaction can belong to
   * @example ['personal', 'gym']
   */
  @IsString({ each: true })
  readonly categories: string[]
}
