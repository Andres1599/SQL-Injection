import express from 'express';
import { getUsers } from '../controllers/user.controller.js'

let router = express.Router();

router.get('/users', getUsers);

export default router;