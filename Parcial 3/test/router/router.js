var mysql = require('mysql');
const express = require('express');
var router = express.Router();
//const cors = require('cors');
//const app = express();

//app.use(express.text())
//app.use(cors())
//app.use(express.json())
const { Console } = require('console');

var con = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'password',
    database: 'prueba'
});

    //CREATE = POST
    router.post('/Crear',(req,res) => {
            con.query(`INSERT INTO persona(id, nombre) VALUES (${req.body.id}, '${req.body.nombre}')`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //READ = GET
    router.get('/Leer/id/:ID',(req,res) => {
        console.log(req.params)
        console.log(req.query.ID);
            con.query(`SELECT * FROM persona WHERE id = ${req.params.ID}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    router.get('/Leer',(req,res) => {
            con.query(`SELECT * FROM persona`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //UPDATE =  PUT/PATCH
    router.put('/Actualizar',(req,res) => {
            con.query(`UPDATE persona set nombre='${req.body.nombre}' WHERE id=${req.body.id}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })


    //DELETE = DELETE
    router.delete('/Eliminar/id/:ID', async (req, res) => {
        console.log(req.params)
        console.log(req.query.ID);
        con.query(`DELETE FROM persona WHERE id = ${req.params.ID}`, function (error,results,fields) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        });
    })

    module.exports.router=router;