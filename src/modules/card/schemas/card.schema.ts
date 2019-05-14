import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  ccNumber: String,
  ccCvv: String,
  ccName: String,
  ccExpiration: String,
});
