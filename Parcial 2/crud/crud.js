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
    app.post('/Crear/id/:ID',(req,res) => {
        console.log(req.params)
        console.log(req.query.ID);
            con.query(`INSERT INTO empleado (id, nombre) VALUES ( ID : ${id_empleado} Nombre : ${nombre})`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    app.post('/insertar', async (req, res) => {
   
        const id_empleado=req.body.id_empleado;
        const nombre=req.body.nombre;
        const apellido=req.body.apellido;
        const email=req.body.email
        console.log(id_empleado,nombre,apellido,email);
        await pool.execute(`INSERT INTO empleado VALUES (?,?,?,?)`,[id_empleado,nombre,apellido,email])
        res.json({'Resultado':`Empleado insertado ID : ${id_empleado} Nombre : ${nombre} Apellido: ${apellido} Email : ${email}`})
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

    //UPDATE =  PUT/PATCH
    app.get('/Actualizar/id/:ID',(req,res) => {
        console.log(req.params)
        console.log(req.query.ID);
            con.query(`UPDATE persona SET id=?, nombre=?`, function (error,results,fields) {
                if (error) throw error;
                console.log(results);
                res.send(results);
            });
    })

    app.put('/actualizar/:id_empleado', async (req, res) => {
        const id=req.params.id_empleado;
        const id_empleado = req.body.id_empleado;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;
        await pool.execute(`UPDATE empleado SET id_empleado=?,nombre=?,apellido=?,email=? WHERE empleado.id_empleado=?`,[id_empleado,nombre,apellido,email,id])
        res.json({ 'Se Actualizo el Empleado ': nombre })
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