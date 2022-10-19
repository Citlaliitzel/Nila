import express from 'express';
import { pool } from '../database/conectionDB.js';

const app = express();

app.get('nila:id', async (req, res) => {
    const DataID = req.params.id;
    console.log(DataID);
    const [responseDB] = await pool.query(`SELECT * FROM roster WHERE id=${DataID}`);
    res.json(responseDB);
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});