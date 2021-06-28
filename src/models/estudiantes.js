const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
	nombre: {
		type:String,
		required:true
	},
	correo:{
		type:String,
		required:true
	}
});

module.exports = model("Estudiantes", EstudianteSchema)