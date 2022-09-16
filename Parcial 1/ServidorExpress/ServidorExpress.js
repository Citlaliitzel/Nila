var express = require('express')
//var cors = require('cors')

var app = express()

//app.use(cors({origin: "http://localhost"}))
//app.use(cors({ origin:"*"}))

app.get('/', (req, res) => {
    res.send('Servidor Express constestando desde Get: PORT8082')
})

app.post('/', (req, res) => {
    res.send('Servidor Express Recibio Post desde el puerto 8082')
})

app.listen(8082, () => {
    console.log('Servidor Express en Puerto 8082')
})








// 1. npm init, para crear los archivos, la carpeta de modulos.
// 2. npm install express , que este en la carpeta nodule modules, para que nos baje el capeta express
// 3.- node servidorexpress <- nombre de tu archivo



// Para instalar el cors: npm install cors
// C:\xampp\htdocs\hernandezlopezCarlosAndres\Parcial 1\ServidorExpress