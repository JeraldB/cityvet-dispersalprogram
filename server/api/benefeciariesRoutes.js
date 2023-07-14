
const router = require("express").Router();
const benefeciaryController = require("../controllers/benefeciaryController");

router.get("/getAll", benefeciaryController.getAllBenefeciaries);

module.exports = router;