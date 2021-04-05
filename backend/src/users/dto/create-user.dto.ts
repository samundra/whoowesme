import { IsString, IsEmail, IsBoolean } from 'class-validator'
export class CreateUserDto {
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsBoolean()
  isActive: boolean
}
