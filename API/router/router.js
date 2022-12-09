var mysql = require('mysql');
const express = require('express');
var router = express.Router();
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
       * /juegos:
       *  post:
       *   description: Ingresa nueva informacion sobre un juego.
       *   responses:
       *    200:
       *     description: Esta permite dar de alta un juego id y nombre del juego, estrellas, categoria, descrpcion, nombre del creador y la fecha del lanzamiento.
      */
        router.post('/', async (req,res) => {
        console.log(req.body)
            con.query(`INSERT INTO juegos (nombre_juego, estrellas, categoria, descripcion, nombre_creador, fecha_lanzamiento) VALUES ('${req.body.NombreJuego}', ${req.body.Estrellas},'${req.body.Categoria}', '${req.body.Descripcion}','${req.body.NombreCreador}', '${req.body.FechaLanzamiento}');`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

      //READ = GET

      /**
       * @swagger
       * /juegos/:ID:
       *  get:
       *   description: Informacion sobre un juego en especifico.
       *   responses:
       *    200:
       *     description: Esta delvuelve toda la informacion de un juego consultada por numero de ID en especifico.
      */
      router.get('/:ID', async (req,res) => {
        console.log(req.params)
            con.query(`SELECT * FROM juegos WHERE id_juego = ${req.params.ID}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

      /**
       * @swagger
       * /juegos:
       *  get:
       *   description: Informacion sobre los juegos.
       *   responses:
       *    200:
       *     description: Esta delvuelve todos los juegos y su informacion.
      */
    router.get('/', async (req,res) => {
        console.log(req.params)
            con.query(`SELECT * FROM juegos`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
  })

    /**
       * @swagger
       * /juegos/:Categoria:
       *  get:
       *   description: Informacion sobre un juego en especifico.
       *   responses:
       *    200:
       *     description: Esta delvuelve toda la informacion de un juego consultada por numero de ID en especifico.
      */
    router.get('/:Categoria', async (req,res) => {
        console.log(req.params)
            con.query(`SELECT * FROM juegos WHERE categoria = ${req.params.Categoria}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })
  

        //UPDATE =  PUT/PATCH

        /**
         * @swagger
         * /juegos:
         *  put:
         *   description: Modifica la informacion sobre un juego en especifico.
         *   responses:
         *    200:
         *     description: Esto permite modificar la informacion de un juego.
        */
        router.put('/:ID', async (req,res) => {
          console.log(req.body)
              con.query(`UPDATE juegos set nombre_juego = '${req.body.NombreJuego}', estrellas = '${req.body.Estrellas}', categoria = '${req.body.Categoria}', descripcion = '${req.body.Descripcion}', nombre_creador = '${req.body.NombreCreador}', fecha_lanzamiento = '${req.body.FechaLanzamiento}' WHERE id_juego = ${req.params.ID}`, function (error,results,fields) {
                  if (error) throw error;
                  console.log(results);
                  res.send(results);
              });
      })
      
        //DELETE = DELETE

        /**
         * @swagger
         * /juegos/:ID:
         *  delete:
         *   description: Elimina la informacion sobre un juego en especifico.
         *   responses:
         *    200:
         *     description: Esto permite eliminar permanentemente toda la informacion de un juego.
        */
        router.delete('/:ID', async (req, res) => {
            console.log(req.params)
            con.query(`DELETE FROM juegos WHERE id_juego = ${req.params.ID}`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
        })
      
      module.exports.router = router;