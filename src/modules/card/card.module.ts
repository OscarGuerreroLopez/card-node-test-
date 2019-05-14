import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardCheckMiddleware } from './card-check.middleware';
import { CardSchema } from './schemas/card.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }])],

  controllers: [CardController],
  providers: [CardService],
})
export class CardModule implements NestModule {
  configure(cardCheck: MiddlewareConsumer) {
    cardCheck.apply(CardCheckMiddleware).forRoutes('card');
  }
}
