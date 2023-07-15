const router = require("express").Router();
const benefeciaryController = require("../controllers/benefeciaryController");

router.get("/getAll", benefeciaryController.getAllBenefeciaries);
router.put("/editBenefeciary/:benefeciaryId",benefeciaryController.updateBenefeciary)

module.exports = router;