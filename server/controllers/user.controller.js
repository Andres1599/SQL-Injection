import Singleton from '../models/singleton.model.js'

const conn = new Singleton().getInstance().conn();

function getUsers(req, res) {
    conn.query('SELECT * FROM users', (err, rows = []) => {
        if (err) {
            res.status(404).json({
                err,
                message: 'Error'
            });
        }
    })
}

function loginUser(req, res) {

    const userCredential = req.body;

    if (!userCredential) {
        res.status(400).json({
            message: 'Error, send credentials'
        });
    }
    conn.query('SELECT * FROM `users` WHERE `email` = ? and `password` = ?', [userCredential.email, userCredential.password], (err, rows) => {
        if (err) {
            res.status(404).json({
                err,
                message: 'Error'
            });
        }

        if (rows.length === 0) {
            res.status(400).json({
                message: 'invalid credentials'
            });
        }

        res.status(200).json({
            user: rows[0]
        });
    });
}

export {
    getUsers,
    loginUser
}