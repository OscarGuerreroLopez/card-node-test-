import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CardModule } from './modules/card/card.module';
import config from './config/keys';

@Module({
  imports: [CardModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
