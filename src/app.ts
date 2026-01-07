import express from 'express';

const app = express();

// middleware לקריאת JSON
app.use(express.json());

// בדיקת חיים – זמני
app.get('/health', (req, res) => {
  res.send('API is running');
});

export default app;
