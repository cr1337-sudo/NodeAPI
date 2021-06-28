const app= require("./app");

app.listen(app.get("port"), ()=>{
	console.log("Listening at port", app.get("port"))
	console.log("Nombrede la app", app.get("name"))
})