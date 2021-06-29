const Estudiante = require("../models/estudiantes");

exports.obtenerMaterias = async (req, res) => {
	try {
		if (req.params.idEst) {
			console.log(req.params.idEst)
			const idEst = req.params.idEst;
			const estudiante = await Estudiante.findById(idEst);
			res.json(estudiante.materias)
		} else {
			res.status(400).json({ error: "Debe enviar el id del estudiante" })
		}
	} catch (error) {
		res.json({ error : "No tiene ni los datos" });
	}
}

exports.agregarMateria = async (req,res)=>{
	//Hay que pasar por parametro el id del estudiante y los datos que se le van a enviar
	try{
		if(req.params.idEst && req.body){
			const idEst = req.params.idEst;
			const materia = req.body;
			//Estudiante al que se le agrega la materia

			const estudiante = await Estudiante.findById(idEst)
			//Agregamos al array la materia enviada por el usuario
			estudiante.materias.push(materia)
			await estudiante.save()
			res.json({isOk:true})
		}else{
			res.json({error: "Datos insuficientes"})
		}
	}catch(error){
		res.json({error:"No pasò el try"})
	}
}

exports.eliminarMateria = async (req,res)=>{
	try{
		if(req.params.idEst && req.params.idMat){
			const idEst = req.params.idEst;
			const idMat = req.params.idMat;
			const estudiante = await Estudiante.findById(idEst);

			estudiante.materias.forEach(e =>{
				if(e._id == idMat){
					e.remove()
				}
			})
			await estudiante.save()
			res.json({msj:"ok"})
		}else{
			res.json({error:"Debe enviar ambosdatos "})
		}
	}
	catch(error){
		res.json({error:"No pasó el try"})

	}
}

exports.actualizarMateria=async (req,res)=>{
	try{
		if(req.params.idEst && req.params.idMat && req.body){
			const idEst = req.params.idEst;
			const idMat = req.params.idMat;
			const data = req.body;
			const estudiante = await Estudiante.findById(idEst);

			estudiante.materias.forEach(e =>{
				//SE usa object asign para actualizar
				//Object.asign(objetoAActualizar, datosNuevos)
				if(e._id == idMat){
					Object.assign(e, data)
				}
			})
			await estudiante.save()

			res.json({isOk:true})
		}else{
			res.json({error:"No enviaste todos los datos"})
		}
	}catch(error){
		res.json({error:"No pasó el try"})
	}
}