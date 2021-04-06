import { IsString, IsOptional, MinLength } from 'class-validator'

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName?: string

  @IsString()
  @IsOptional()
  lastName?: string

  @IsString()
  @MinLength(5)
  @IsOptional()
  password?: string
}
