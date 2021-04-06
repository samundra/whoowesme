import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator'

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(55)
  firstName?: string

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(55)
  lastName?: string
}
