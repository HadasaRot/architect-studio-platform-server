import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

// middleware לקריאת JSON
app.use(express.json());


// בדיקת חיים – זמני
app.get('/health', (req, res) => {
  res.send('API is running');
});

app.use(errorMiddleware);

export default app;
