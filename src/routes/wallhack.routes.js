const express = require("express");
const router = express.Router();

const { guardarSensor, listarSensor, registrarSensor   } = require("../controllers/principal.controller");

const { isAuthenticated } = require("../helpers/auth");



router.post("/principal/guardar", isAuthenticated,guardarSensor);
router.get("/mostrarsensores", isAuthenticated, listarSensor);
router.get("/registro", isAuthenticated, registrarSensor)

module.exports = router;