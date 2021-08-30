const express = require("express");
const router = express.Router();
const Teacher = require("../controllers/teacher");

router.post("/create", Teacher.create);
router.get("/list", Teacher.list);

module.exports = router;