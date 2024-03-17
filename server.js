import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import router from './src/routes/index.js';


const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/scales', router);


const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});

export default prisma;