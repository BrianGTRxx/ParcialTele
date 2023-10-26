const principalCtrl = {};

const Sensores = require("../models/Sensor");



principalCtrl.registrarSensor = (req, res) => {
  res.render('principal/Registro');

};

principalCtrl.listarSensor = async (req, res) => {

  const listadosensores = await Sensores.find();
  console.log(listadosensores)
  res.render('principal/lista', {listadosensores})
};

//Ruta que estará en el boton Guardar


principalCtrl.guardarSensor = async (req, res) => {
    const {
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud
       } = req.body;
   
  
    const errors = [];
    if (!nombre) {
      errors.push({ text: "Por favor indique Nombre bien" });
    }
    if (!ubicacion) {
      errors.push({ text: "Por favor indique bien la ubicacion" });
    }
    if (!tipo) {
      errors.push({ text: "Por favor indique tipo producto" });
    }
    if (!latitud) {
      errors.push({ text: "Por favor indique latitud" });
    }
    if (!longitud) {
      errors.push({ text: "Por favor indique  longitud" });
    }
    if (errors.length > 0) {
      res.render("/", {
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud
      });
    } else {
      const newSensor = new Sensores({
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud
      });
      newSensor.user = req.user.id;
      await newSensor.save();
      req.flash("success_msg", "Producto adicionado correctamente");
      res.redirect("/mostrarsensores");

  
  }
  };

module.exports = principalCtrl;