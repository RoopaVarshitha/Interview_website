// routes/interviewRoutes.ts
import express from 'express';
import { getCandidateList, addInterview } from '../controllers/interviewController';

const router = express.Router();

router.get('/', getCandidateList);
router.post('/add', addInterview);

export default router;
