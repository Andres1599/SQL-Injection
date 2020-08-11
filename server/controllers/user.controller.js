import Singleton from '../models/singleton.model.js'

const conn = new Singleton().getInstance().conn();

function getUsers(req, res) {
    conn.promise().query('SELECT * FROM users').then((rows) => {
        if (rows) {
            res.status(200).json({
                users: rows[0]
            })
        }
    }).catch(err => {
        res.status(404).json({
            err,
            message: 'Error'
        });
    })
}

function loginUser(req, res) {

    const userCredential = req.body;

    if (!userCredential) {
        res.status(400).json({
            message: 'Error, send credentials'
        });
    }

    const statement = 'SELECT * FROM users WHERE email=\'' + `${userCredential.email}` + '\' and password=\'' + `${userCredential.password}` + '\'';
    
    conn.promise().query(statement).then(
        (rows, fields) => {
            res.status(200).json({
                user: rows[0],
                query: statement
            });
        }
    ).catch(err => {
        res.status(404).json({
            err,
            message: 'Error',
            query: statement
        });
    });
}

export {
    getUsers,
    loginUser
}