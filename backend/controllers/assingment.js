const Assingment = require("../models/assingment");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const create = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.assingmentName)
    return res.status(401).send({ message: "process failed: Incomplete data" });
  const existing = await Assingment.findOne({
    assingmentName: req.body.assingmentName,
  });
  if (existing)
    return res
      .status(401)
      .send("preccess failed: the name assingment is already registered");


  const assingment = new Assingment({
    name: req.body.name,
    email: req.body.email,
    assingmentName: req.body.assingmentName,
    status: true,
  });
  const result = assingment.save();
  if (result)
    return res
      .status(200)
      .send({ message: "Assingment register", data: assingment });
  return res.status(401).send({ message: "Fail to register assingment" });
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const list = async (req, res) => {
  const assingment = await Assingment.find();
  if (assingment.length === 0)
    return res.status(401).send({ message: "Not assingment found" });
  return res.status(200).send(assingment);
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
module.exports = { create, list };
