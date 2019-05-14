import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ICardInfo } from './interfaces/';

import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  getCardInfo(@Req() req: Request, @Res() res: Response): Response {
    // tslint:disable-next-line:no-console

    return res.status(200).json({ message: 'Nice done' });
  }
}
