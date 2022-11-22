const express = require('express');
const cors = require('cors')
const ruta_empleado = require('./ruta_empleado')

const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Empleados',
            version: '1.0.0',
        },
        servers:[
            {url: "http://localhost:8083"}
        ],
    },
    apis: [`${path.join(__dirname,"./routes/ruta_empleado.js")}`],
};

const app = express();
app.listen(cors({ origin:"http://localhost"}))
app.use(express.text());
app.use(express.json());

app.use('/empleado',ruta_empleado.router);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.listen(8082, () => {
    console.log('Servidor Express escuchando en el puerto 8082');
});