const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const create = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(401).send({ message: "process failed: Incomplete data" });
  const existing = await Teacher.findOne({ email: req.body.email });
  if (existing)
    return res
      .status(401)
      .send("preccess failed: the email is already registered");

      let hash = await bcrypt.hash(req.body.password, 10);

  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    status: true,
  });
  const result = teacher.save();
  if (result)
    return res.status(200).send({ message: "Teacher register", data: teacher });
  return res.status(401).send({ message: "Fail to register teacher" });
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const list = async (req, res) => {
  const teacher = await Teacher.find();
  if (teacher.length === 0)
    return res.status(401).send({ message: "Not teacher found" });
  return res.status(200).send(teacher);
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
module.exports = { create, list };
