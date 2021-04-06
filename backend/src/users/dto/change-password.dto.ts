import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword?: string

  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  newPassword?: string
}
