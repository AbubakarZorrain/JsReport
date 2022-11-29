import { Test, TestingModule } from '@nestjs/testing';
import { JsreportingController } from './jsreporting.controller';

describe('JsreportingController', () => {
  let controller: JsreportingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JsreportingController],
    }).compile();

    controller = module.get<JsreportingController>(JsreportingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
