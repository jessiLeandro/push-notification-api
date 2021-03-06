const router = require("express").Router({ mergeParams: true });

const companyRoute = require("./company");
const equipTypeRoute = require("./equipType");
const equipRoute = require("./equip");
const entryEquipmentRoute = require("./entryEquipment");
const analyzeRoute = require("./analyze");
const processRoute = require("./process");
const typeAccountRoute = require("./typeAccount");
const userRoute = require("./user");
const accessoriesRoute = require("./accessories");

const carRoute = require("./estoque/car");
const equipModelRoute = require("./estoque/equipModel");
const entranceRoute = require("./estoque/entrance");
const markRoute = require("./estoque/mark");
const manufacturerRoute = require("./estoque/manufacturer");
const productRoute = require("./estoque/product");
const technicianRoute = require("./estoque/technician");
const reserveRoute = require("./estoque/reserve");
const stockRoute = require("./estoque/stock");
const notificationRoute = require("./estoque/notifications");

router.use("/company", companyRoute);
router.use("/equip/equipType", equipTypeRoute);
router.use("/equip", equipRoute);
router.use("/entryEquipment", entryEquipmentRoute);
router.use("/analyze", analyzeRoute);
router.use("/process", processRoute);
router.use("/typeAccount", typeAccountRoute);
router.use("/user", userRoute);
router.use("/accessories", accessoriesRoute);

router.use("/car", carRoute);
router.use("/equipModel", equipModelRoute);
router.use("/entrance", entranceRoute);
router.use("/mark", markRoute);
router.use("/manufacturer", manufacturerRoute);
router.use("/product", productRoute);
router.use("/technician", technicianRoute);
router.use("/reserve", reserveRoute);
router.use("/stock", stockRoute);
router.use("/notification", notificationRoute);

module.exports = router;
