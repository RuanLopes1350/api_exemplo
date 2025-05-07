import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import userRouter from './src/routes/userRoutes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

export default app;