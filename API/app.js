const express = require('express');
const path = require('path');
const app = express();
const ruta = require('./router/router');
app.use(express.text())
app.use(express.json())

const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');
const { Console } = require('console');

const swaggerOptions = {
  definition:{
    openapi : '3.0.0',
    info:{
      title: 'Api Juegos',
      version : '1.0.0',
    },
      servers:[
        {url:'http://localhot:8082'}
      ],
  },
  apis: [`${path.join(__dirname,"./router/router.js")}`],
};

app.use("/juegos",ruta.router)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8082,() => {
  console.log('Servidor Express escuchando en el puerto 8082')
  console.log(__dirname)
  console.log(__filename)
})