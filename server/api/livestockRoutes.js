const livestockController = require("../controllers/livestockController");

const router = require("express").Router();

router.post("/addLivestock", livestockController.addLivestock);
router.get("/allLivestock", livestockController.getAllLivestock);
router.get("/:livestockId", livestockController.getLivestockById);
router.put("/editLivestock/:livestockId", livestockController.updateLivestock);
module.exports = router;
