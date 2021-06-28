exports.obtener = (req,res)=>{
	const estudiantes = [{
		"nombre":"Pedro Elver",
		"coreo" : "pedrito@gmail.com"
	},
	{
		"nombre":"Jimena Vera",
		"correo":"jimenita@gmail.com"
	}];
	res.json(estudiantes)
}

exports.agregar = (req,res)=>{
	const {nombre, correo} = req.body;
	console.log(nombre)
	res.json("Datos")
}

exports.actualizar = (req, res) => {
	const id = req.params.id
	console.log(id)
	res.json("Datos recibidos para actualizar")
}

exports.eliminar = (req, res) => {
	const id = req.params.id
	console.log(id)
	res.json("Id recibido para eliminar documento")
}