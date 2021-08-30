const express = require("express");
const router = express.Router();
const Assingment = require("../controllers/assingment");

router.post("/create", Assingment.create);
router.get("/list", Assingment.list);

module.exports = router;