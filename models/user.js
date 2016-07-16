var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userScheMa = new Schema({
	id: String,
	qq: String,
  name:String,
  avatar:String
});
exports.user = mongoose.model('users', userScheMa);
