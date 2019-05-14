import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICardInfo, ICardInfoItem } from './interfaces/index';

@Injectable()
export class CardService {
  constructor(
    @InjectModel('Card') private readonly cardModel: Model<ICardInfoItem>,
  ) {}
  storeCardInfo(cardInfo: ICardInfo): Promise<ICardInfoItem> {
    return new Promise((resolve, reject) => {
      const newCard = new this.cardModel(cardInfo);

      newCard
        .save()
        .then((data: ICardInfoItem) => {
          resolve(data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
