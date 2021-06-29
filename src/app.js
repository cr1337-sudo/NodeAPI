const express = require("express");
const morgan =require("morgan");
//Conexion a la DB
const conexionDB = require("./db.conexion")
//routerEstudiantes actua como redireccionador
//En esta variable se almacenan todos los enlaces de la seccion students 
const routerEstudiantes = require("./routes/students.routes");
const app = express();

//Se inicia la conexion ala DB;
conexionDB();
console.log(conexionDB())

//Settings
app.set("name", "rest-api-nodejs");
//Puerto, no hay que forzarlo por eso el condicional
app.set("port", process.env.port || 3500);


//Middlewares
//Express no esta configurado por defecto para recibir documentos JSON
app.use(express.json())
app.use(morgan("dev"))


//Routes
//Similar a django separando el proyecto en aplicaciones
app.use("/api/estudiantes", routerEstudiantes)
app.use(express.static("public")) //Archivos estaticos e index.html





module.exports = app;