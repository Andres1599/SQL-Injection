import Singleton from '../models/singleton.model.js'

const conn = new Singleton().getInstance();

function getUsers(req, res) {
    conn.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(404).json({
                err,
                message: 'Error'
            });
        }
        
        res.status(200).json({
            rows
        });
    })
}

function loginUser(req, res) {}

export {
    getUsers,
    loginUser
}