import express from 'express';
import { getUsers, loginUser } from '../controllers/user.controller.js'

let router = express.Router();

/* user routes */
router.get('/users', getUsers);
router.post('/user/login', loginUser);
router.post('/user/', loginUser);
router.put('/user/', loginUser);
router.delete('/user/', loginUser);

export default router;