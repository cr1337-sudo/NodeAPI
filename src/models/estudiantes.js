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
		//Cada materia es un objeto con un id nuevo
	},materias:[
		{
			nota: Number,
			nombre: String,
			comentario: String
		}
	]
});

// model("Nombre del modelo como se vaa usar, ModelSchema")
module.exports = model("Estudiante", EstudianteSchema);