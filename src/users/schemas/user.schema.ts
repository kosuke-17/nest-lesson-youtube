import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  // String型、NOT NULL制約、一意の制約
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
});
