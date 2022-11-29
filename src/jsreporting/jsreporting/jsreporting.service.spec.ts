import { Test, TestingModule } from '@nestjs/testing';
import { JsreportingService } from './jsreporting.service';

describe('JsreportingService', () => {
  let service: JsreportingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsreportingService],
    }).compile();

    service = module.get<JsreportingService>(JsreportingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
