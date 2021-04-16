import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from '../app.module'
import { Connection, getConnection } from 'typeorm'
import { User } from './entity/user.entity'

describe('Users', () => {
  let app: INestApplication
  let conn: Connection
  let jwtToken: string

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    app.setGlobalPrefix('v1')

    await app.init()

    conn = await getConnection()
  })

  afterAll(async () => {
    if (conn.isConnected) {
      await conn.createEntityManager().query(`truncate table users cascade;`)
    }

    await app.close()
  })

  describe('authentication', () => {
    it('should return 401 Unauthorized for unauthenticated request', () => {
      return request(app.getHttpServer())
        .get('/v1/users/me')
        .expect(401)
        .expect({
          statusCode: 401,
          message: 'Unauthorized',
        })
    })

    // 1. Create User
    it('should create user with username & password', async () => {
      return request(app.getHttpServer())
        .post('/v1/users/register')
        .send({ firstName: 'ddd', lastName: 'aaa', email: 'testuser@gmail.com', password: '123456' })
        .expect(201)
        .expect({
          statusCode: 201,
          message: 'User has been created. Please verify your email "testuser@gmail.com" to continue.',
          result: {
            firstName: 'ddd',
            lastName: 'aaa',
            email: 'testuser@gmail.com',
            isActive: true,
          },
        })
        .set('Accept', 'application/json')
    })

    // 2. Login User and get token
    it('should return access_token for correct username & password', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/login')
        .send({
          email: 'testuser@gmail.com',
          password: '123456',
        })
        .set('Accept', 'application/json')
        .expect(201)

      // save the access token for subsequent tests
      jwtToken = response.body.access_token

      // ensure a JWT token is included in the response
      expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/) // jwt regex
    })

    // 3. Check User information with token
    it('should perform authenticated request with valid access_token', async () => {
      const response = await request(app.getHttpServer())
        .get('/v1/users/me')
        .set({
          Authorization: 'Bearer ' + jwtToken,
          Accept: 'application/json',
        })
        .expect(200)

      const { message, result: user } = response.body
      expect(message).toBe('User profile')

      expect(user.firstName).toBe('ddd')
      expect(user.lastName).toBe('aaa')
      expect(user.email).toBe('testuser@gmail.com')
    })
  })

  describe('profile', () => {
    it('should check that user can update their profile', async () => {
      const response = await request(app.getHttpServer())
        .patch('/v1/users/')
        .set({
          Authorization: 'Bearer ' + jwtToken,
          Accept: 'application/json',
        })
        .send({
          firstName: 'firstName',
          lastName: 'lastName',
        })
        .expect(200)

      const { message, result: user } = response.body
      expect(user).toEqual({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'testuser@gmail.com',
        isActive: true,
      })
      expect(message).toBe('User information updated successfully.')
    })

    it('should check that user can change password', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/users/change-password')
        .set({
          Authorization: 'Bearer ' + jwtToken,
          Accept: 'application/json',
        })
        .send({
          oldPassword: '123456',
          newPassword: '1234567',
        })
        .expect(200)

      const { message } = response.body
      expect(message).toBe('Password updated successfully.')

      // Check Login using new username & password
      const response2 = await request(app.getHttpServer())
        .post('/v1/auth/login')
        .send({
          email: 'testuser@gmail.com',
          password: '1234567',
        })
        .set('Accept', 'application/json')
        .expect(201)

      // save the access token for subsequent tests
      jwtToken = response2.body.access_token

      // ensure a JWT token is included in the response
      expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/) // jwt regex
    })
  })

  describe('findAll', () => {
    it('should return list of users', async () => {
      const response = await request(app.getHttpServer())
        .get('/v1/users')
        .send({
          offset: undefined,
          limit: 10,
        })
        .set({
          Authorization: 'Bearer ' + jwtToken,
          Accept: 'application/json',
        })
        .expect(200)

      const { message, result: users } = response.body

      const user = users[0] as User
      expect(message).toBe('List of users')
      expect(user.id).toBeDefined()
      expect(user.email).toBeDefined()
    })
  })
})
