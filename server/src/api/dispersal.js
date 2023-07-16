const express=require('express')
const dispersaController = require("../controllers/dispersalController")

const router = express.Router();

router.post("/livestock",dispersaController.disperseLivestock)

module.exports =router;