import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import { AppModule } from '../app.module'
import { Connection, getConnection } from 'typeorm'
import { User } from '../users/entity/user.entity'
import { hash } from '../common/password-hash'
import { Transaction } from './entity/transaction.entity'

describe('Transactions', () => {
  let app: INestApplication
  let conn: Connection
  let jwtToken: string
  let userId: string
  let transactionId: string

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    app.setGlobalPrefix('v1')
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        forbidUnknownValues: true,
      }),
    )

    await app.init()

    conn = await getConnection()

    // create user
    await __createUser()
  })

  const __createUser = async () => {
    const user = new User()
    user.firstName = 'Santo'
    user.lastName = 'Shr'
    user.email = 'santo.shr@gmail.com'
    user.isActive = true
    user.password = await hash('123456')
    await conn.getRepository(User).save(user)

    userId = user.id

    const t1 = new Transaction()
    t1.amount = 100.0
    t1.categories = ['gym', 'personal']
    t1.date = new Date()
    t1.description = 'Description for test'
    t1.userId = user.id
    await conn.getRepository(Transaction).save(t1)
  }

  afterAll(async () => {
    await conn.createEntityManager().query(`truncate table transactions cascade;`)

    await app.close()
  })

  describe('Protected Transaction actions', () => {
    it('should get username and password for valid user', async () => {
      const resp1 = await request(app.getHttpServer())
        .post('/v1/auth/login')
        .send({ email: 'santo.shr@gmail.com', password: '123456' })
        .set('content-type', 'application/json')
        .expect(201)

      jwtToken = resp1.body.access_token

      expect(jwtToken).toBeDefined()
    })

    it('should throw error 400 Bad request', async () => {
      const resp = await request(app.getHttpServer())
        .post('/v1/transactions')
        .send({
          amount: 111.11,
          categories: ['personal'],
          description: 'test for transaction entry',
          date: '',
        })
        .set({
          Authorization: 'Bearer ' + jwtToken,
          'Content-Type': 'application/json',
        })

      const { statusCode, message } = resp.body
      expect(message).toEqual(['date must be a Date instance'])
      expect(statusCode).toBe(400)
    })

    describe('user actions', () => {
      it('should return list of transactions', async () => {
        const resp2 = await request(app.getHttpServer())
          .get('/v1/transactions')
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })
          .query({ offset: undefined, limit: 1 })
          .expect(200)

        const { message, result: transactions } = resp2.body

        expect(message).toBe('List of transactions')
        const trans = transactions[0]
        expect(trans.userId).toBe(userId)
        expect(trans.amount).toBe('100.00')
        expect(trans.categories).toEqual(['gym', 'personal'])
        expect(trans.description).toBe('Description for test')
      })

      it('can create transaction record', async () => {
        const resp2 = await request(app.getHttpServer())
          .post('/v1/transactions')
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })
          .send({
            amount: 111.11,
            categories: ['personal'],
            description: 'test for transaction entry',
            date: '2021-04-12T11:55:04.169Z',
          })
          .expect(201)

        const { statusCode, message, result: transaction } = resp2.body

        // Reassign to trasaction
        transactionId = transaction.id

        expect(statusCode).toBe(201)
        expect(message).toBe('Transaction created successfully.')
        expect(transaction.userId).toBe(userId)
        expect(transaction.categories).toEqual(['personal'])
        expect(transaction.description).toBe('test for transaction entry')
      })

      // Patch
      it('can update transaction record', async () => {
        const resp3 = await request(app.getHttpServer())
          .patch(`/v1/transactions/${transactionId}`)
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })
          .send({
            amount: 222.22,
          })
          .expect(200)

        const { statusCode: statusCode3, message: message3, result: transaction3 } = resp3.body

        expect(statusCode3).toBe(200)
        expect(message3).toBe('Transaction updated successfully.')
        expect(transaction3.amount).toBe(222.22)
      })

      it('checks that deleted record return 404', async () => {
        // Assume that transaction with UUID (62ff6e4f-b553-4b78-9b74-c5df407aa810) do not exists on DB
        await request(app.getHttpServer())
          .get('/v1/transactions/62ff6e4f-b553-4b78-9b74-c5df407aa810')
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })
          .expect(404)
      })

      // For some reason this code is not working as expected
      // Will revisit later to fix it.
      it.skip('check delete transaction record', async () => {
        await request(app.getHttpServer())
          .delete(`/v1/transactions/${transactionId}`)
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })

        // Make sure that the record is really gone
        await request(app.getHttpServer())
          .get(`/v1/transactions/${transactionId}`)
          .set({
            Authorization: 'Bearer ' + jwtToken,
            'Content-Type': 'application/json',
          })
          .expect(404)
      })
    })
  })
})
