import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './modules/users/userRoutes.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(userRoutes);


export default app;