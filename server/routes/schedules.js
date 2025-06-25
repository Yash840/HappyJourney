import express from 'express'
import { validateScheduleRequest } from '../middlewares/schdeuleReqValidator.js';
import findAvailableSchedules from '../controllers/scheduleController.js';

const schedulesRouter = express.Router();

schedulesRouter.post('/',validateScheduleRequest,findAvailableSchedules);

export default schedulesRouter

