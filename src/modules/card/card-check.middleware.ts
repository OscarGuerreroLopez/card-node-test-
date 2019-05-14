import { Injectable, NestMiddleware } from '@nestjs/common';
import { ICardInfo } from './interfaces/';

import * as cardValidation from 'card-validator';

@Injectable()
export class CardCheckMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const cardInfo: ICardInfo = req.body;
    const numberValidation = cardValidation.number(cardInfo.ccNumber);
    // tslint:disable-next-line:no-console
    if (numberValidation.isPotentiallyValid) {
      next();
    } else {
      res.status(401).json({ message: 'Not a valid Card' });
    }
  }
}
