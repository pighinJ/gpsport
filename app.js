const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectDB');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const fs = require('fs'); // Importa fs si necesitas leer archivos


// Configuración de sesión
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
}));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos y análisis de cuerpos de solicitud
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/productos', productsRouter);
app.use('/admin', adminRouter);


app.get('/', (req, res) => {
    res.render('page/home');
});
app.get('/about', (req, res) => {
    res.render('page/about');
});
app.get('/contact', (req, res) => {
    res.render('page/contact');
});

app.get('/login', (req, res) => {
    res.render('page/login');
});
app.get('/shop', (req, res) => {
    fs.readFile('path/to/datos.json', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        const products = JSON.parse(data);
        console.log(products); // Verifica que los datos sean correctos
        res.render('shop', { products });
    });
});



const iniciar = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log('Servidor ejecutándose en el puerto', process.env.PORT);
        });
    } catch (error) {
        console.log('Error al iniciar el servidor:', error);
    }
};

iniciar();
