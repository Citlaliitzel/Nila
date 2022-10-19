var mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.text())
app.use(express.json())
const { Console } = require('console');

var con = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Nila226',
    database: 'prueba'
});

app.get('/Consulta/id/:ID',(req,res) => {
    console.log(req.params)
    console.log(req.query.ID);
        con.query(`SELECT * FROM persona where idID = ${req.params.ID}`, function (error,results,fields) {
            if (error) throw error;
            console.log(results);
            res.send(results);
        })
})

    //EJEMPLO CLASE
    //import express from 'express';
    //import { pool } from '../database/conectionDB.js';
    //const app = express();
    //app.get('nila:id', async (req, res) => {
        //const DataID = req.params.id;
        //console.log(DataID);
        //const [responseDB] = await pool.query(`SELECT * FROM roster WHERE id=${DataID}`);
        //res.json(responseDB);
    //});
    //app.listen(3006, () => {
        //console.log('Servidor Express escuchando en el puerto 3006');
    //});