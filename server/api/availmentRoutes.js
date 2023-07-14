const express = require("express");
const availmentController = require("../controllers/availmentController");

const router = express.Router();

// Availment routes
router.post("/service", availmentController.createAvailment);
router.put("/service/:availmentId/accept", availmentController.acceptAvailment);
router.put("/service/:availmentId/reject", availmentController.rejectAvailment);
router.get("/allService", availmentController.getAllAvailments);
router.put("/edit/:availmentId", availmentController.editAvailment);

module.exports = router;


