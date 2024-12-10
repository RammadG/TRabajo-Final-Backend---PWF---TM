import bcrypt from 'bcrypt'
import pool from '../config/db.config.js'

class UserRepository {

    static async createUser(userData) {

        const { email, number, name } = userData

        const passwordHashed = await bcrypt.hash(userData.password, 10)

        const result = await pool.execute('INSERT INTO Users(name, number, email, password ) VALUES( ?, ?, ?, ? )', [name, number, email, passwordHashed])

        return result

    }

    static async getUser(username){

        const result = await pool.execute('SELECT * FROM Users WHERE email = ? OR number = ?', [username, username])

        return result[0][0]

    }

    static async addContact(user_id, contact_id) {

        const result = await pool.execute('INSERT INTO Contacts( user_id, contact_id ) VALUES (?, ?)', [user_id, contact_id])

        return result
    }

    static async deleteContact(user_id, contact_id) {

        const result = await pool.execute('DELETE FROM Contacts WHERE user_id = ? AND contact_id = ?', [user_id, contact_id])

        return result
    }

    static async getContacts(user_id) {

        let result = await pool.execute(
            `SELECT * FROM Users INNER JOIN Contacts ON Users.id = Contacts.contact_id WHERE Contacts.user_id = ?`, [user_id])

        return result[0]

    }

    static async getUserById(user_id) {

        let result = await pool.execute('SELECT name, number, email, description FROM Users WHERE Users.id = ?', [user_id])

        return result[0][0]

    }

    static async getAllUsers(userId){
        let result = await pool.execute('SELECT number, email, name FROM Users WHERE id != ?', [userId])

        return result[0]

    }

    static async changeUserPassword(email, password){

        const passwordHashed = await bcrypt.hash(password, 10)

        await pool.execute('UPDATE Users SET password = ? WHERE email = ?', [passwordHashed, email])
    }

}

export default UserRepository