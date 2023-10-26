const { Schema, model } = require("mongoose");

const GutsSchema = new Schema(
  {
    
    nombre: { type: String,required: true},
    ubicacion: { type: String,required: true},
    tipo: { type: String,required: true},
    latitud: { type: Number,required: true},
    longitud: { type: Number,required: true},
    valor: { type: Number,required: false}
    
    },
   

);

module.exports = model("Unisucre", GutsSchema);