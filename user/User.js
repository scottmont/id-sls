const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
//mongoose.model('User', UserSchema);
//module.exports = mongoose.model('User', UserSchema);
module.exports = (mongoose.models && mongoose.models.User
  ? mongoose.models.User
  : mongoose.model('User', UserSchema));

