var mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const ruta = require('./router/router');

    app.use(ruta.router)

    //escuchando
    app.listen(8082, () => {
        console.log('Servidor Express escuchando en el puerto 8082');
    });