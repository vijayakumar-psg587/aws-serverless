import { Module } from '@nestjs/common';
import { SampleController } from './controllers/sample/sample.controller';
import { SampleService } from './services/sample/sample.service';

@Module({
  controllers: [SampleController],
  providers: [SampleService]
})
export class ApiModule {}
