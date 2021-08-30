const express = require("express");
const router = express.Router();
const Student = require("../controllers/student");

router.post("/create", Student.create);
router.get("/list", Student.list);

module.exports = router;

















