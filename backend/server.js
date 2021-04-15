import express from 'express';
import data from '../frontend/src/data';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.product);
});

app.listen(5000, () => { console.log('server started at port: 3000')} )