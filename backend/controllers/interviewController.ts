// controllers/interviewController.ts
import { Request, Response } from 'express';
import Interview from '../models/Interview';

export const getCandidateList = async (req: Request, res: Response) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addInterview = async (req: Request, res: Response) => {
  try {
    const { candidateName, interviewDate, interviewerName, notes } = req.body;
    const newInterview = new Interview({ candidateName, interviewDate, interviewerName, notes });
    await newInterview.save();
    res.status(201).json({ message: 'Interview added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
