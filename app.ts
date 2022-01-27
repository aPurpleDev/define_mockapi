import * as dotenv from 'dotenv'
import express from 'express';

import api_router from './src/router/api_router';
import { startServer } from './src/server/server';

dotenv.config();

const app = express();
const port = 3000;

app.use('/', api_router);

startServer(app);