import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import morganBody from 'morgan-body';
import cors from 'cors';
import helmet from 'helmet';
import multer from 'multer';
import indexRouter from './routes/index.js';

const app = express();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/tmp/');
  },
  filename(req, file, cb) {
    file.originalname = file.originalname.replace(/[^A-Z0-9.]+/ig, '_');
    cb(null, file.originalname);
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(cors());
app.use(helmet());

app.use(multer({
  storage
}).any());

app.use('/', indexRouter);

morganBody(app);

export default app;
