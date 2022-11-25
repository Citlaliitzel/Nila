var mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const ruta = require('./router/router');

    const swaggerUI     = require('swagger-ui-express');
    const swaggerJsDoc  = require('swagger-jsdoc');

    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {title: 'API Empleados',
            version: '1.0.0',
        },
            servers:[            
                {url: "http://localhost:8082"}        
            ],      
        },
        apis: [`${path.join(__dirname,"./routes/ruta_empleado.js")}`],
      };

    
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

    app.use(ruta.router)

    //escuchando
    app.listen(8082, () => {
        console.log('Servidor Express escuchando en el puerto 8082');
    });