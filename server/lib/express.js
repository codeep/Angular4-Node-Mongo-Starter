import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import express from 'express'
import api from '../api'
import path from 'path'

const app = express();

app.use(morgan ('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

app.get('/user', (req, res) => {
  res.send(req.user);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(process.cwd(), '/public/index.html'));
// });

export default app;
