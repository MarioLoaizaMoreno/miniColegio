const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Assingment = require("./routes/assingment");
const Teacher = require("./routes/teacher");
const Student = require("./routes/student");
const Course = require("./routes/course");
require("dotenv").config();
//-------------------------------------------------------------------
//-------------------------------------------------------------------
const app = express();
//-------------------------------------------------------------------
//-------------------------------------------------------------------
app.use(express.json());
app.use(cors());
app.use("/api/assingment", Assingment);
app.use("/api/teacher", Teacher);
app.use("/api/student", Student);
app.use("/api/course", Course);
//-------------------------------------------------------------------
//-------------------------------------------------------------------
app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);
//-------------------------------------------------------------------
//-------------------------------------------------------------------
dbConnection();
