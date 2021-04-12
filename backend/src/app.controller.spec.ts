import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConfigService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('healthCheck', () => {
    it('should return OK', () => {
      expect(appController.healthCheck()).toEqual({
        status: 'OK',
      })
    })
  })

  describe('root', () => {
    it('should return OK and version', () => {
      expect(appController.home()).toEqual({
        status: 'OK',
        version: '0.5.0',
      })
    })
  })
})
