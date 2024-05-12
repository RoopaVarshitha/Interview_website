// models/User.ts
import { Document, model, Schema } from 'mongoose';

interface UserInterface extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<UserInterface>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<UserInterface>('User', userSchema);
