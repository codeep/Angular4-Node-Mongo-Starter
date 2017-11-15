import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema ({
  name: Schema.Types.String
});

mongoose.model('User', userSchema);
