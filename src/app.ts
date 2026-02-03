import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware';
import testRoutes from "./routes/test.routes";
import clientsRoutes from './routes/clients.routes';
import usersRoutes from './routes/users.routes';
import clientProjectsRoutes from './routes/client-projects.routes';
import contentGroupRoutes from './routes/contentGroup.routes';
import contentItemRoutes from './routes/contentItem.routes';
import { mockAuthMiddleware } from './middlewares/mockAuth.middleware';

const app = express();

app.use(mockAuthMiddleware);

// middleware לקריאת JSON
app.use(express.json());

// בדיקת חיים – זמני
app.get('/health', (req, res) => {
  res.send('API is running');
});

app.use("/test", testRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/users', usersRoutes)
app.use('/api/client-projects', clientProjectsRoutes);
app.use('/api/projects', contentGroupRoutes);
app.use('/api', contentItemRoutes);

app.use(errorMiddleware);

export default app;
