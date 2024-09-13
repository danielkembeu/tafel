// src/index.ts
import express from 'express';
import userRoutes from '../routes/user_route';
import courseRoutes from '../routes/courses_route';
import resourceRoutes from '../routes/resources_route';
import commentRoutes from '../routes/comment_route';
import cors from 'cors';

const app = express();
const port = 4100;

app.use(express.json());
app.use(cors())

// Register routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/comments', commentRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://10.0.2.2:${port}`);
});
