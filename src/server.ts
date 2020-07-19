import express, { response } from 'express';
import "@controllers/UsersController";

const app = express();
app.get('/', (req, res) => {
    return res.json({message: 'Oi!'});
});

app.listen(3333);