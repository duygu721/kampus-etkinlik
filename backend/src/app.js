import express from 'express';
import eventRoutes from './routes/event-routes.js';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString(), student: process.env.STUDENT_ID || '' }));
app.use('/events', eventRoutes);
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
app.use((error, req, res, next) => {
  console.error(error.message);
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({ message: 'Geçersiz JSON gövdesi' });
  }
  res.status(500).json({ message: 'Server error' });
});

export default app;
