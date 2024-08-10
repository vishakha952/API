const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();
router.get("/", getproductcontroller);
router.get("/genre/:genre", getproductcontroller);

module.exports = router;
