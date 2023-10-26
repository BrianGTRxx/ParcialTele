const express = require("express");
const router = express.Router();

const { guardarButtom, listadoData, registrarSensor   } = require("../controllers/principal.controller");

const { isAuthenticated } = require("../helpers/auth");


router.post("/principal/guardar", isAuthenticated,guardarButtom);
router.get("/listado", isAuthenticated, listadoData);
router.get("/registro", isAuthenticated, registrarSensor)

module.exports = router;