import express from 'express';
import { getUsers, loginUser, createUser, deleteUser } from '../controllers/user.controller.js'

let router = express.Router();

/* user routes */
router.get('/users', getUsers);
router.post('/user/login', loginUser);
router.post('/user/', createUser);
router.put('/user/', loginUser);
router.delete('/user/', deleteUser);

export default router;