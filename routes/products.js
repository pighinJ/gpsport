const express = require('express');
const router = express.Router();

// Importa los métodos del controlador de productos
const {
    obtenerTodosLosProductos,
    buscarPorAccesorios,
    buscarPorPantalones,
    buscarPorChaquetas,
    buscarPorCamisetas,
    buscarPorZapatillas,
    obtenerProductosOferta
} = require('../controllers/products');

// Ruta para obtener todos los productos
router.route('/shop').get(obtenerTodosLosProductos);
router.get('/', obtenerProductosOferta);

// Rutas para obtener productos por categoría
router.route('/accesorios').get(buscarPorAccesorios);
router.route('/pantalones').get(buscarPorPantalones);
router.route('/chaquetas').get(buscarPorChaquetas);
router.route('/camisetas').get(buscarPorCamisetas);
router.route('/zapatillas').get(buscarPorZapatillas);

// Exporta el router para usarlo en otros archivos
module.exports = router;
