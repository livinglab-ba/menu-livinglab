const express = require ("express"); 
const app = express(); 

app.use(express.static( __dirname ))

app.get("/", function(req,res){
res.sendFile(__dirname + "/index.html")
});

app.listen(3005, function(){
    console.log("Servidor funcionando na porta 3005");
}); 