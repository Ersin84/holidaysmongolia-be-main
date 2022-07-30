const router = require("express").Router();
const {
  checkToken,
  authorize,
  userif,
} = require("../../../auth/token_validation");
const { all_, one_, add_, update_, delete_ } = require("./controller");
router.get("/", userif, all_);
router.get("/:id", userif, one_);
router.post("/", userif, add_);
router.put("/:id", userif, update_);
router.delete("/:id", userif, delete_);
module.exports = router;