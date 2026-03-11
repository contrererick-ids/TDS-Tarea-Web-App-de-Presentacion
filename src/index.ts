import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

const rutaAssets = path.join(__dirname, '..', 'public');
app.use('/assets', express.static(rutaAssets));

app.listen(3000, () => {
    console.log('api is running in port' + port)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});