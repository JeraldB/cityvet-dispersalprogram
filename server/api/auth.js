const usersController = require("../controllers/usersController");

const router = require("express").Router();

router.get("/register", usersController.Register);

module.exports = router;
