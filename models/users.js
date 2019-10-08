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
        console.log('adding user', first_name)
        return db.one(`
        INSERT INTO users (first_name, last_name, email, user_password)
        VALUES($1, $2, $3, $4) returning *`, [first_name, last_name, email, user_password]
        )
    }
}



module.exports = User;