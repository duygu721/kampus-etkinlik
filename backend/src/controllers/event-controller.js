import mongoose from 'mongoose';
import { Event } from '../models/event-model.js';

export async function getEvents(req, res, next) {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (error) { next(error); }
}

export async function getEventById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Event not found' });
    }
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) { next(error); }
}

export async function createEvent(req, res, next) {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
}
