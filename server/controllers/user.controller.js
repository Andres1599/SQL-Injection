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

function createUser(req, res) {
    const userSend = req.body

    const statement = 'INSERT INTO users VALUES (0,' +
        `${userSend.name}` + ',' + `${userSend.lastName}` + ',' + `${userSend.email}` + ',' +
        `${userSend.password}` + ')'

    conn.promise().query(statement).then(
        (rows, fields) => {
            res.status(200).json({
                user: rows
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

function deleteUser(req, res) {
    const userId = req.body

    const statement = 'DELETE FROM users where id = ' + `${userId.id}` + ';'

    conn.promise().query(statement).then(
        (rows, fields) => {
            res.status(200).json({
                deleted: rows
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

function updateUser(req, res) {
    const userSend = req.body

    const statement = 'UPDATE users SET name="' +
        `${userSend.name}` + '", last_name="' + `${userSend.lastName}` + '", email="' +
        `${userSend.email}` + '", password="' + `${userSend.password}` + '" WHERE id= ' +
        `${userSend.id}` + ';'

    conn.promise().query(statement).then(
        (rows, fields) => {
            res.status(200).json({
                user: rows
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
    loginUser,
    createUser,
    deleteUser,
    updateUser
}