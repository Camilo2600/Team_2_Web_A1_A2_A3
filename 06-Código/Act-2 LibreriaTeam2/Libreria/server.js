const express = require('express') //Llamamos al modulo express para el levantamiento del servidor
const mongoose = require('mongoose') //Incluimos el modulo mongoose para conectar con mongoDB Atlas
const bodyParser = require('body-parser') //Incluimos el modulo para obtener informacion del body de las consultas
const portParameter = 8081 //Asignamos un puerto para que se levante el sevidor para localhost
//const portParameter = process.env.PORT || 8081  //Asignamos puerto ppara levantar servidor en cloud
const EndPoints = require('./api/EndPoints') //Importamos las uris


var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/libreriateam2",EndPoints) //Creamos la url para el llamado de las uris

mongoose.connect( //Establecemos conexion
    "mongodb+srv://caacosta4:appsweb2@cluster0.mcnsh7r.mongodb.net/?retryWrites=true&w=majority", //pegamos el link de la base de datos
    {useNewUrlParser: true},
    (err,res) => {
        err && console.log("Error conectado a la base de datos")
        app.listen(portParameter, () => {
            // console.log(`App listening to port ${portParameter}`) // para Cloud server
            console.log(`Server is running at http://localhost:${portParameter}`)//para Localhost
        })
    }
)