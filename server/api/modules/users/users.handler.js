import mongoose from 'mongoose';

const User = mongoose.model('User');

export function getAllUsers(req, res){
  User.find()
    .then((users) => res.send({data: 'API Works'}))
    .catch(() => res.sendStatus(500))
}
