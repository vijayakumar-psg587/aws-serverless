import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { CommonModule } from './modules/common/common.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [ApiModule, CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
