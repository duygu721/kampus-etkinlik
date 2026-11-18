import 'dotenv/config';
import app from './app.js';
import { connectDatabase } from './config/database.js';

const port = Number(process.env.PORT) || 3000;
try {
  await connectDatabase();
  app.listen(port, () => console.log(`API hazır: http://localhost:${port}`));
} catch (error) {
  console.error(`Başlangıç hatası: ${error.message}`);
  process.exit(1);
}
