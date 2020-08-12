import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';
import cors from 'cors';
import morgan from 'morgan';

let app = express();
const __dirname = path.resolve();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../public')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});
app.set('view engine', 'jade');
app.use('/api/', indexRouter);
app.use(cors());

export default app;