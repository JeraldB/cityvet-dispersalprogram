const express = require("express")
const AdminController = require("../controllers/admin")

const router = express.Router();

router.get("/:adminId", AdminController.getAdminById)

module.exports = router