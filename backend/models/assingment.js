const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");
//-------------------------------------------------------------------
//-------------------------------------------------------------------
const assingmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  assingmentName: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});
//-------------------------------------------------------------------
//-------------------------------------------------------------------
assingmentSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      iat: moment().unix(),
    },
    process.env.SECRET_KEY_JWT
  );
};
//-------------------------------------------------------------------
//-------------------------------------------------------------------
const assingment = mongoose.model("assingment", assingmentSchema);
module.exports = assingment;
