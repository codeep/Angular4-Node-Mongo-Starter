import mongoose from 'mongoose'
import config from '../config'

export function init() {
  console.log('connecting', config.db);
  mongoose.connect(config.db);
}