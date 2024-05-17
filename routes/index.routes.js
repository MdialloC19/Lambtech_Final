const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
router.use("/user", userRoutes);
// convos
router.use("/conversation", conversationRoutes);
router.use("/review", reviewRoutes);
module.exports = router;
