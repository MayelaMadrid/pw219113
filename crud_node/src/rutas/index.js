const express = require('express');
const rutas = express.Router();

const customerController = require('../controllers/customerController');

rutas.get('/',customerController.list);



module.exports = rutas;



