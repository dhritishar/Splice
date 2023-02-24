const express = require("express");
const { loginController, registerController } = require("../controllers/userCtrl");

//router object
const router = express.Router();

//routes
//Post:Login
router.post("/login", loginController);

//Post:Register
router.post("/register", registerController);

module.exports = router;