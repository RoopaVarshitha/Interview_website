// models/Interview.ts
import { Document, model, Schema } from 'mongoose';

export interface InterviewInterface extends Document {
  candidateName: string;
  interviewDate: Date;
  interviewerName: string;
  notes?: string;
}

const interviewSchema = new Schema<InterviewInterface>({
  candidateName: { type: String, required: true },
  interviewDate: { type: Date, required: true },
  interviewerName: { type: String, required: true },
  notes: { type: String },
});

const Interview = model<InterviewInterface>('Interview', interviewSchema);

export default Interview;
