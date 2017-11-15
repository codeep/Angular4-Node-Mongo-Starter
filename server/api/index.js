import glob from 'glob';
import path from 'path';
import express from 'express';

const api = express();

const models = glob.sync(path.join(process.cwd(),  '/**/*.model.js'));
const router = glob.sync(path.join(process.cwd(),  '/**/*.routes.js'));

models.forEach(model => require(model));
router.forEach(routes => require(routes).init(api));

export default api;
