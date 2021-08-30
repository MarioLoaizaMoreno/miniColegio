const bcrypt = require("bcrypt");
const Student = require("../models/student");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const create = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(401).send({ message: "process failed: Incomplete data" });
  const existing = await Student.findOne({ email: req.body.email });
  if (existing)
    return res
      .status(401)
      .send("preccess failed: the email is already registered");

      let hash = await bcrypt.hash(req.body.password, 10);

  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    status: true,
  });
  const result = student.save();
  if (result)
    return res.status(200).send({ message: "Student register", data: student });
  return res.status(401).send({ message: "Fail to register student" });
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
const list = async (req, res) => {
  const student = await Student.find();
  if (student.length === 0)
    return res.status(401).send({ message: "Not student found" });
  return res.status(200).send(student);
};
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
module.exports = { create, list };
