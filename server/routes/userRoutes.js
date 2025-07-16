const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getHistory,
} = require("../controllers/userController");

router.get("/users", getUsers);
router.post("/users", addUser);
router.put("/users/:id/claim", claimPoints);
router.get("/users/:id/history", getHistory);

module.exports = router;
