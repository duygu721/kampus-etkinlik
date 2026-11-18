import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 3, maxlength: 100 },
  category: { type: String, required: true, enum: ['Seminer', 'Atölye', 'Söyleşi', 'Yarışma'] },
  capacity: { type: Number, min: 0, default: 0 },
  date: { type: Date, required: true },
  time: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true, minlength: 3 },
  description: { type: String, trim: true, maxlength: 500, default: '' }
}, { timestamps: true });

export const Event = mongoose.model('Event', eventSchema);
