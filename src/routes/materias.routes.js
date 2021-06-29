const {Router} = require("express");
const ctrMaterias = require("../controllers/materias.controller")

const routerMaterias = Router();

routerMaterias.get("/:idEst", ctrMaterias.obtenerMaterias);
routerMaterias.post("/:idEst",ctrMaterias.agregarMateria)
routerMaterias.delete("/:idEst/:idMat",ctrMaterias.eliminarMateria)
routerMaterias.put("/:idEst/:idMat", ctrMaterias.actualizarMateria)

module.exports = routerMaterias;