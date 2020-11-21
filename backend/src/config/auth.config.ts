interface JwtStrategyConfig {
  jwtSecrets: string
  jwtTokenExpires: string
}

export default (): JwtStrategyConfig => ({
  jwtSecrets: process.env.JWT_SECRETS || 'ddasdaf33232xx3%33',
  jwtTokenExpires: process.env.JWT_TOKEN_EXPIRES || '1h',
})
