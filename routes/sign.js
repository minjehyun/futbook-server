const express = require("express");
const router = express.Router();
const controller = require("../controllers/sign");

router.post("/signin", controller.signin);
router.post("/signup", controller.signup);
router.post("/signout", controller.signout);

module.exports = router;
