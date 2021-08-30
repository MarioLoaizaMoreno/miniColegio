const express = require("express");
const router = express.Router();
const Course = require("../controllers/course");

router.post("/create", Course.create);
router.get("/list", Course.list);

module.exports = router;