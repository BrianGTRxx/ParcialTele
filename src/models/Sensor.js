const { Schema, model } = require("mongoose");

const BeisbolSchema = new Schema(
  {
    
    nombre: { type: String,required: true},
    ubicacion: { type: String,required: true},
    tipo: { type: String,required: true},
    latitud: { type: Number,required: true},
    longitud: { type: Number,required: true}
    },
   

);

module.exports = model("Beisbol", BeisbolSchema);