import { IsString, IsOptional } from 'class-validator'

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName?: string

  @IsString()
  @IsOptional()
  lastName?: string

  @IsString()
  @IsOptional()
  password?: string
}
