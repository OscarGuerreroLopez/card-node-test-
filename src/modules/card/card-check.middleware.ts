import { Injectable, NestMiddleware } from '@nestjs/common';
import { ICardInfo } from './interfaces/';

import * as cardValidation from 'card-validator';

@Injectable()
export class CardCheckMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const cardInfo: ICardInfo = req.body;
    const numberValidation = cardValidation.number(cardInfo.ccNumber);
    const cvvValidation = cardValidation.cvv(cardInfo.ccCvv);
    const expirationValidation = cardValidation.expirationDate(
      cardInfo.ccExpiration,
    );

    if (
      numberValidation.isValid &&
      cvvValidation.isValid &&
      expirationValidation.isValid &&
      cardInfo.ccName
    ) {
      next();
    } else {
      res.status(400).json({ message: 'Not a valid Card' });
    }
  }
}
