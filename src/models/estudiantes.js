const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
	nombre: {
		type: String,
		required: true
	},
	correo: {
		type: String,
		required: true
	},
	activo: {
		type: Boolean,
		default: true
	}
});

// model("Nombre del modelo como se vaa usar, ModelSchema")
module.exports = model("Estudiante", EstudianteSchema);