var express= require("express");
var app= express();
var http= require("http").Server(app);
var io= require("socket.io")(http);

app.use(express.static(__dirname + "/public"));

app.set("public", __dirname+ "/public");

app.set("port",process.env.POT || 3000);//ksjdlks
//sockets

io.sockets.on("connection", function(socket){
	socket.on("userimage", function(imagen){
		console.log(imagen);
		io.sockets.emit("addimage", "", imagen);
	})
	socket.broadcast.on("datos", function(datos){
		io.sockets.emit("nombresSrc", datos);
	})
})
app.get("/", function(req,res){
	res.render("search.html");

})

http.listen(3000, function(){
	console.log("Servidor encendido.");
});