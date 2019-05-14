import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICardInfo, ICardInfoItem } from './interfaces/index';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CardService {
  constructor(
    @InjectModel('Card') private readonly cardModel: Model<ICardInfoItem>,
  ) {}
  storeCardInfo(cardInfo: ICardInfo): Promise<ICardInfoItem> {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:no-console
      console.log(cardInfo);
      const cardInfoHashed: ICardInfo = {
        ccNumber: this.encryptIt(cardInfo.ccNumber),
        ccCvv: this.encryptIt(cardInfo.ccCvv),
        ccName: cardInfo.ccName,
        ccExpiration: cardInfo.ccExpiration,
      };
      const newCard = new this.cardModel(cardInfoHashed);

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

  encryptIt(item: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hashItem = bcrypt.hashSync(item, salt);

    return hashItem;
  }
}
