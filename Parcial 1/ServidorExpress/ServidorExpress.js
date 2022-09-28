const express = require('express')
const cors = require('cors')
const cadena = require('./cadena')

const app = express()

app.use(cors({origin: "http://localhost"}))
//app.use(cors({ origin:"*"}))

app.use(express.text())
app.use(express.json())

//app.get('/', (req, res) => {
    //res.send('Servidor Express constestando desde Get: PORT8082')
//})

app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log('Archivo enviado')})
})

app.post('/texto', (req, res) => {
    console.log(req.body)
    let may = cadena.pasarMayusculas(req.body);
    let sinesp = cadena.quitarEspacios(req.body);
    let longi = cadena.obtenerLongitud(req.body);

    //let may = req.body.toUpperCase()
    //let sinesp = req.body.trim()
    //let longi = req.body.length
    res.json({ mayusculas: may,
                sinespacios: sinesp,
                longitud: longi })
})

app.post('/json', (req, res) => {
    console.log(req.body.nombre)
    let cadena = "Hola "+req.body.nombre+" "+req.body.Apellido+", como estas?"
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadena', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma', (req, res) => {
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send('La suma es '+ suma)
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