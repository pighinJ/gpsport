const mongoose = require('mongoose');

// Define el esquema para el modelo de Producto
const productosEsquema = new mongoose.Schema({
    nombre_producto: {
        type: String,
        required: true // Asegura que este campo sea obligatorio
    },
    cantidad_stock: {
        type: Number,
        required: true, // Asegura que este campo sea obligatorio
        min: 0 // Asegura que la cantidad no sea negativa
    },
    descripcion: {
        type: String,
        required: true // Asegura que este campo sea obligatorio
    },
    imagen: {
        type: String,
        required: true // Asegura que este campo sea obligatorio
    },
    categoria: {
        type: String,
        required: true // Asegura que este campo sea obligatorio
    },
    oferta: {
        type: Boolean,
        default: false // Define el valor por defecto
    },
    precio_oferta: {
        type: Number,
        min: 0 // Asegura que el precio de oferta no sea negativo
    },
    precio: {
        type: Number,
        required: true, // Asegura que este campo sea obligatorio
        min: 0 // Asegura que el precio no sea negativo
    }
});

// Crea el modelo con el esquema definido
const Productos = mongoose.model('Productos', productosEsquema);

module.exports = Productos;
