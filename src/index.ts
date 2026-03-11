import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

const rutaAssets = path.join(__dirname, '..', 'public');
app.use('/assets', express.static(rutaAssets));

// Ruta principal, sirve el index.html (SPA)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta al formulario de contacto
app.get('/contacto', (req, res) => {
    res.redirect('/#contact');
});

app.get('/thanks.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'thanks.html'));
});

app.post('/contacto', (req, res) => { 
    res.sendFile(path.join(__dirname, 'views', 'thanks.html'));
});

app.listen(3000, () => {
    console.log('api is running in port' + port)
});
