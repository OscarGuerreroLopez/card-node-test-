import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { CardCheckMiddleware } from './card-check.middleware';

@Module({
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule implements NestModule {
  configure(cardCheck: MiddlewareConsumer) {
    cardCheck.apply(CardCheckMiddleware).forRoutes('card');
  }
}
