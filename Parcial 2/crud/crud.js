var mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.text())
app.use(express.json())
const { Console } = require('console');

var con = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'password',
    database: 'prueba'
});

    //CREATE = POST
    app.post('/Crear',(req,res) => {
            con.query(`INSERT INTO persona(id, nombre) VALUES (${req.body.id}, '${req.body.nombre}')`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //READ = GET
    app.get('/Leer/id/:ID',(req,res) => {
        console.log(req.params)
        console.log(req.query.ID);
            con.query(`SELECT * FROM persona WHERE id = ${req.params.ID}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    app.get('/Leer',(req,res) => {
            con.query(`SELECT * FROM persona`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //UPDATE =  PUT/PATCH
    app.put('/Actualizar',(req,res) => {
            con.query(`UPDATE persona set nombre='${req.body.nombre}' WHERE id=${req.body.id}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })


    //DELETE = DELETE
    app.delete('/Eliminar/id/:ID', async (req, res) => {
        console.log(req.params)
        console.log(req.query.ID);
        con.query(`DELETE FROM persona WHERE id = ${req.params.ID}`, function (error,results,fields) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        });
    })


    //escuchando
    app.listen(8082, () => {
        console.log('Servidor Express escuchando en el puerto 8082');
    });