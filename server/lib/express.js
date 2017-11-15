import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';
import path from 'path';

import api from '../api';

const app = express();

app.use(morgan ('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(express.static(path.join(process.cwd(), '/server/dist')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', api);

app.get('/user', (req, res) => {
  res.send(req.user);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/server/dist/index.html'));
});

export default app;
