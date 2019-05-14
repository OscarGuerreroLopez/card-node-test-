import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { ICardInfo } from './interfaces/';

import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  // route just to verify the Card is alright, doesn't do anything, just returns ok or not (check middleware card-check)
  @Get()
  getCardInfo(@Req() req: Request, @Res() res: Response): Response {
    // tslint:disable-next-line:no-console

    return res.status(200).json({ message: 'Credit card alright' });
  }

  // check middleware cause if the card is not valid we are not proceeding
  @Post()
  async payment(
    @Body() cardInfo: ICardInfo,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.cardService
      .storeCardInfo(cardInfo)
      .then(data => {
        return res.status(200).json({
          message: 'Credit card stored',
          id: data.id,
          ccName: data.ccName,
        });
      })
      .catch((err: any) => {
        return res.status(500).json(err);
      });
  }
}
