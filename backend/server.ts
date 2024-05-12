// server.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import interviewRoutes from './routes/interviewRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define mongoose connection options
const mongooseOptions: any = {
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// Connect to MongoDB with options
mongoose.connect("mongodb+srv://roopavarshitha30:Srilu%231234@cluster0.5za212q.mongodb.net/",)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/interviews', interviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
