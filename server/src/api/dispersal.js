const express=require('express')
const dispersalController = require("../controllers/dispersalController")

const router = express.Router();

router.post("/livestock",dispersalController.disperseLivestock)
router.get("/livestock/dispersed/:benefeciaryId", dispersalController.getDispersedLivestockForBeneficiary);
router.get('/transactions/:userId', dispersalController.getAllTransactionsForUser);

module.exports =router;