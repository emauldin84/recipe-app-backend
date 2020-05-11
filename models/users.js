const db = require('./conn')
const bcrypt = require('bcrypt')

class User {
    constructor(id, first_name, last_name, email, user_password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.userPassword = user_password;
    }
    
    static getAllUsers() {
        return db.any (`
        SELECT * from users
        `)
    }

    static getUserById(userId) {
        return db.one(`
        SELECT * from users
        WHERE id=$1
        `, [userId])
        .then(userData => {
            const userInstance = new User (
                userData.id,
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.user_password,
                )
                return userInstance;
            })
        .catch(err => console.log(err))
    }

    static getUserByEmail(email) {
        console.log('getting user by email')
        return db.one(`
        SELECT * from users
        WHERE email=$1
        `, [email])
        .then(userData => {
            const userInstance = new User (
                userData.id,
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.user_password,
                )
                console.log('from user model',userInstance)
                return userInstance;
            })
        .catch(err => console.log(err))
    }

    static addNewUser(first_name, last_name, email, user_password) {
        console.log('adding user', first_name)
        return db.one(`
        INSERT INTO users (first_name, last_name, email, user_password)
        VALUES($1, $2, $3, $4) returning *`, [first_name, last_name, email, user_password]
        )
    }

    static hashPassword(newPassword) {
        return bcrypt.hashSync(newPassword, 10);
    };

    // switch to this checkPassword to utilize bcrypt
    checkPassword(password, dbPassword) {
        console.log('password', password, 'dbPassword', dbPassword)
        return bcrypt.compareSync(password, dbPassword);
    }

    // checkPassword(bodyPassword, dbPassword) {
    //     return (bodyPassword === dbPassword)
    // }
}



module.exports = User;