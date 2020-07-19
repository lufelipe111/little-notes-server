import express, { response } from 'express';

const app = express();
app.get('/', (req, res) => {
    return res.json({message: 'Oi!'});
});

app.listen(3333);