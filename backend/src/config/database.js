import mongoose from 'mongoose';

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI tanımlı değil. backend/.env dosyasını kontrol edin.');
  await mongoose.connect(uri);
  const { host, name } = mongoose.connection;
  const local = uri.startsWith('mongodb://');
  console.log(`MongoDB bağlantısı: ${local ? 'yerel' : 'Atlas'} ${host}/${name}`);
}
