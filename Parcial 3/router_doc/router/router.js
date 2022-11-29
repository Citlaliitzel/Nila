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
    
    /**
     * @swagger
     * /Persona:
     *  post:
     *  description: Ingresa nueva informcion sobre una persona.
     *  responses:
     *  200:
     *  description: Esta permite dar de alta a una persona: id y nombre.
    */
    router.post('/', async (req,res) => {
        con.log(req.body)
            con.query(`INSERT INTO persona(id, nombre) VALUES (${req.body.id}, '${req.body.nombre}')`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //READ = GET

    /**
     * @swagger
     * /Persona/:ID:
     *  get:
     *  description: Informacion sobre una persona en especifico.
     *  responses:
     *  200:
     *  description: Esta delvuelve todos las personas de una persona consultada por numero de ID.
    */
    router.get('/:ID', async (req,res) => {
        console.log(req.params)
            con.query(`SELECT * FROM persona WHERE idID = ${req.params.ID}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    /**
     * @swagger
     * /Persona:
     *  get:
     *  description: Informacion sobre una persona.
     *  responses:
     *  200:
     *  description: Esta delvuelve todos las personas.
    */
    router.get('/', async (req,res) => {
        console.log(req.params)
            con.query(`SELECT * FROM persona`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    //UPDATE =  PUT/PATCH

    /**
     * @swagger
     * /Persona:
     *  put:
     *  description: Modifica la informacion sobre una persona en especifico.
     *  responses:
     *  200:
     *  description: Esto permite modificar la informacion todos las personas.
    */
    router.put('/:ID', async (req,res) => {
        console.log(req.body)
            con.query(`UPDATE persona set nombre='${req.body.nombre}' WHERE id=${req.body.id}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })


    //DELETE = DELETE

    /**
     * @swagger
     * /Persona:
     *  delete:
     *  description: Elimina la informacion sobre una persona en especifico.
     *  responses:
     *  200:
     *  description: Esto permite eliminar permanentemente la informacion todos las personas.
    */
    router.delete('/id', async (req, res) => {
        console.log(req.params)
        con.query(`DELETE FROM persona WHERE idID = ${req.params.ID}`, function (error,results,fields) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        });
    })

    module.exports.router=router;