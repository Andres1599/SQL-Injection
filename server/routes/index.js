import express from 'express';
import { getUsers, loginUser } from '../controllers/user.controller.js'

let router = express.Router();

router.get('/users', getUsers);
router.post('/user/login', loginUser);

export default router;