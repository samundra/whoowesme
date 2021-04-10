import * as bcrypt from 'bcrypt'

export const hash = async (password: string, saltOrRounds = 10): Promise<string> =>
  bcrypt.hash(password, saltOrRounds)

export const compare = async (password: string, encryptedPassword: string): Promise<boolean> =>
  bcrypt.compare(password, encryptedPassword)
