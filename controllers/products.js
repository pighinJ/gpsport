const Productos = require('../models/product');

const obtenerTodosLosProductos = async (req, res) => {
    try {
        const products = await Productos.find();
        console.log('Todo bien, se realizó la búsqueda');
        res.render('page/shop', { products });
    } catch (error) {
        console.error('Error al obtener todos los productos', error);
        res.status(500).json({ error: 'Error al obtener todos los productos' });
    }
};



const obtenerProductosOferta = async (req, res) => {
    try {
        // Aquí se asume que 'oferta' es un campo en tu modelo que indica si el producto está en oferta
        const productosOferta = await Productos.find({ oferta: true });
        res.render('page/home', { productosOferta });
    } catch (error) {
        console.log('Error al obtener productos en oferta:', error);
        res.status(500).send('Error al obtener productos en oferta.');
    }
};

const buscarPorCamisetas = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Camisetas' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error('Error en la búsqueda de categoría', error);
        res.status(500).json({ error: `Error al obtener productos de la categoría Camisetas` });
    }
};

const buscarPorPantalones = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Pantalones' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error('Error en la búsqueda de categoría', error);
        res.status(500).json({ error: `Error al obtener productos de la categoría Pantalones` });
    }
};

const buscarPorZapatillas = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Zapatillas' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error('Error en la búsqueda de categoría', error);
        res.status(500).json({ error: `Error al obtener productos de la categoría Zapatillas` });
    }
};

const buscarPorChaquetas = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Chaquetas' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error('Error en la búsqueda de categoría', error);
        res.status(500).json({ error: `Error al obtener productos de la categoría Chaquetas` });
    }
};

const buscarPorAccesorios = async (req, res) => {
    try {
        const productos = await Productos.find({ categoria: 'Accesorios' });
        res.status(200).json({ productos, numProducts: productos.length });
    } catch (error) {
        console.error('Error en la búsqueda de categoría', error);
        res.status(500).json({ error: `Error al obtener productos de la categoría Accesorios` });
    }
};

module.exports = {
    obtenerTodosLosProductos,
    buscarPorAccesorios,
    buscarPorPantalones,
    buscarPorChaquetas,
    buscarPorCamisetas,
    buscarPorZapatillas,
    obtenerProductosOferta
};
