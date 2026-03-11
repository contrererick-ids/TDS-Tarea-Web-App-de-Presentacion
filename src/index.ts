import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.listen(3000, () => {
    console.log('api is running in port' + port)
});