const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({origin: "http://localhost"}))
//app.use(cors({ origin:"*"}))

//app.get('/', (req, res) => {
    //res.send('Servidor Express constestando desde Get: PORT8082')
//})

app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

//app.post('/', (req, res) => {
    //res.send('Servidor Express Recibio Post desde el puerto 8082')
//})

app.post('/', (req, res) => {
    res.send({usuario: 'Nila'})
})

app.use((req, res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
})

app.listen(8082, () => {
    console.log('Servidor Express en Puerto 8082')
    console.log(__dirname)
    console.log(__filename)
})