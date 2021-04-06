import * as bcrypt from 'bcrypt'

export const hash = async (password: string, saltOrRounds = 10): Promise<string> => {
  const hashed = await bcrypt.hash(password, saltOrRounds)

  return hashed
}

export const compare = async (password: string, hash: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hash)

  return isMatch
}
