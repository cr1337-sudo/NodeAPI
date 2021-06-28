const { Router } = require("express");

//NO es necesario que tenga un nombre distinto, puede llamarse router tranquilamente
const routerEstudiantes = Router();
const ctrEst = require("../controllers/students.controller")

routerEstudiantes.get("/", ctrEst.obtener);

//El navegador por defecto no hace peticiones POST
routerEstudiantes.post("/", ctrEst.agregar)

//Put realiza una actualización
routerEstudiantes.put("/:id", ctrEst.actualizar)

routerEstudiantes.delete("/:id", ctrEst.eliminar)

module.exports = routerEstudiantes;