const principalCtrl = {};

const Sensores = require("../models/Sensor");

principalCtrl.registrarSensor = (req, res) => {
  res.render('principal/formulario');

};

principalCtrl.listadoData = async (req, res) => {

  const listadosensores = await Sensores.find();
  console.log(listadosensores)
  res.render('principal/listado', {listadosensores})
};

//Ruta que estará en el boton Guardar


principalCtrl.guardarButtom = async (req, res) => {
    const {
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud,
      valor
       } = req.body;
   
  
    const errors = [];
    if (!nombre) {
      errors.push({ text: "Por favor indique el nombre" });
    }
    if (!ubicacion) {
      errors.push({ text: "Por favor indique la ubicacion" });
    }
    if (!tipo) {
      errors.push({ text: "Por favor indique el tipo" });
    }
    if (!latitud) {
      errors.push({ text: "Por favor indique la latitud" });
    }
    if (!longitud) {
      errors.push({ text: "Por favor indique la longitud" });
    }
    if (!valor) {
      errors.push({ text: "Por favor indique la longitud" });
    }
    if (errors.length > 0) {
      res.render("/", {
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor
      });
    } else {
      const newSensor = new Sensores({
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor
      });
      newSensor.user = req.user.id;
      await newSensor.save();
      req.flash("success_msg", "Producto adicionado correctamente");
      res.redirect("/listado");

  
  }
  };

module.exports = principalCtrl;