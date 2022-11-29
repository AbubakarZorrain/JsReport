import { Module } from '@nestjs/common';
import { JsreportingController } from './jsreporting/jsreporting.controller';
import { JsreportingService } from './jsreporting/jsreporting.service';

@Module({
  controllers: [JsreportingController],
  providers: [JsreportingService]
})
export class JsreportingModule {}
