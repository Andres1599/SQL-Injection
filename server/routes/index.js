import express from 'express';
import { getUsers, loginUser, createUser, deleteUser, updateUser } from '../controllers/user.controller.js'

let router = express.Router();

/* user routes */
router.get('/users', getUsers);
router.post('/user/login', loginUser);
router.post('/user/', createUser);
router.put('/user/', updateUser);
router.delete('/user/', deleteUser);

export default router;