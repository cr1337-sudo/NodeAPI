const Estudiante = require("../models/estudiantes")

exports.obtener = async (req, res) => {
	try {
		//Obtiene todos los estudiantes
		const estudiantes = await Estudiante.find({activo:true})
		res.json(estudiantes)
	} catch (error) {
		res.json(eror)
	}
}


exports.agregar = async (req, res) => {
	try {
		const { nombre, correo, materias } = req.body;
		if (nombre && correo) {
			//Al crear un nuevo estudiantes automaticamente se crea sola la BD
			const nuevoEstudiante = new Estudiante({ nombre, correo, materias });
			await nuevoEstudiante.save();
			res.json({
				msj: "Documento insertado correctamente",
				id: nuevoEstudiante._id
			})
		} else {
			res.json({ isOK: false, msj: "Los datos son invalidos" })
		}

	} catch (error) {
		res.json(error)
	}
}

exports.actualizar = async (req, res) => {
	try{
		const id = req.params.id
		//El param data se pasa en formato objeto, se puede hacer con inputs mas adelante
		const data = req.body;
		if(id && data){
			await Estudiante.findByIdAndUpdate(id, data)
			res.json("Registro Actualizado")

		}else{
			res.json({msj: "DAtos insuficientes"})
		}
	}catch(error){
		res.json({error:error})
	}
}

exports.eliminar = async (req, res) => {
	try {
		//Id pasado por paarmetro en url, es necesario y esta configurado en routes
		const id = req.params.id
		const eliminado = await Estudiante.findByIdAndUpdate(id, {activo:false})

		res.status(200).json({ msj: "Dato borrado exitosamente", isOk: true })
	} catch (error) {
		res.status(500).json(error);
	}
}