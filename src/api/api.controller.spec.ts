import { Test, TestingModule } from '@nestjs/testing';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

describe('ApiController', () => {
  let apiController: ApiController;

  beforeEach(async () => {
    const Api: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiController = Api.get<ApiController>(ApiController);
  });

  describe('root', () => {
    it('should return "example-nestjs Api"', () => {
      expect(apiController.getApi()).toBe('example-nestjs Api');
    });
  });
});
