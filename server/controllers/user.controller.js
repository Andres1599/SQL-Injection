import Sequelize from 'sequelize';
const sequelize = new Sequelize('sys_secure', 'root', '', {
    dialect: 'mysql',
    dialectOptions: {
      host: 'localhost'
    },
    logging: console.log,
    define: {
        freezeTableName: true
    }
  });

  let User = sequelize.define('users', {
      name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING
  }, {
    timestamps: false
  });

function getUsers(req, res) {
    User.findAll().then(users => {
        console.log("All users:", JSON.stringify(users, null, 2));
        res.status(200).json(users);
    });
}

function loginUser(req, res) {

    const userCredential = req.body;

    if (!userCredential) {
        res.status(400).json({
            message: 'Error, send credentials'
        });
    }

    User.findOne({ where: {email: userCredential.email, password: userCredential.password }}).then(user => {
        if (!user) {
            res.status(404).json({
                err,
                message: 'Invalid User'
            });
        } else {
            console.log("Logged user:", JSON.stringify(user, null, 2));
            res.status(200).json(user);
        }
    }).catch(function (err) {
        res.status(404).json({
            err,
            message: 'Invalid User'
        });
    });
}

function createUser(req, res) {
    const userSend = req.body;

    User.build({ name: userSend.name, last_name: userSend.lastName, email: userSend.email, password: userSend.password}).then(() => {
        console.log('User created');
        res.status(200).json({});
    }).catch(function (err) {
        res.status(404).json({
            err,
            message: 'Creating error'
        });
    });
}

function deleteUser(req, res) {
    const userId = req.params.id

    User.destroy({ where: { id: userId }}).then(user => {
        if (!user) {
            res.status(404).json({
                err,
                message: 'Invalid User'
            });
        } else {
            res.status(200).json(user);
        }
    }).catch(function (err) {
        res.status(404).json({
            err,
            message: 'Invalid User'
        });
    });
}

function updateUser(req, res) {
    const userSend = req.body

        User.update({ name: userSend.name, last_name: userSend.lastName, email: userSend.email, password: userSend.password },
        { where: { id: userSend.id }}).then(user => {
            if (!user) {
                res.status(404).json({
                    err,
                    message: 'Invalid User'
                });
            } else {
                res.status(200).json(user);
            }
        }).catch(function (err) {
            res.status(404).json({
                err,
                message: 'Invalid User'
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