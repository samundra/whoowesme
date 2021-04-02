import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTransactionDto {
  @IsNotEmpty()
  readonly amount: number
  readonly description?: string
  readonly date?: Date
  /**
   * A list of categories that transaction can belong to
   * @example ['personal', 'gym']
   */
  @IsString({ each: true })
  readonly categories: string[]
}
