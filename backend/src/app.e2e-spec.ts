import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { AppModule } from './app.module'

describe('App', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()
    app.setGlobalPrefix('v1')

    // Replace Logger with TestLogger
    // app.useLogger(new TestLogger());

    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('public endpoints', () => {
    it('should show return OK with version for endpoint GET /v1 ', () => {
      return request(app.getHttpServer())
        .get('/v1')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, {
          status: 'OK',
          version: '0.5.0',
        })
    })

    it('should show return OK for endpoint GET /v1/health ', () => {
      return request(app.getHttpServer())
        .get('/v1/health')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, {
          status: 'OK',
        })
    })
  })
})
