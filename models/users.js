const db = require('./conn')

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

    static addNewUser(first_name, last_name, email, user_password) {
        return db.one(`
        INSERT into users(first_name, last_name, email, user_password)
        VALUES($1, $2, $3, $4) return id`, [first_name, last_name, email, user_password]
        )
    }
}



module.exports = User;