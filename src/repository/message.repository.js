import pool from "../config/db.config.js"

class MessageRepository {

    static async addMessage(data){

        const { content, author_id, receiver_id } = data

        const result = pool.execute('INSERT INTO Messages(content, author_id, receiver_id) VALUES( ?, ?, ? )', [content, author_id, receiver_id])

        return result
    }
    
    static async getMessages(author_id, receiver_id){

        const query = `SELECT content, author_id, receiver_id, name, Messages.created_at FROM Messages 
        INNER JOIN Users ON Messages.receiver_id = Users.id
        WHERE author_id = 1 AND receiver_id = 3 OR author_id = 3 AND receiver_id = 1 
        ORDER BY created_at ASC`

        const result = await pool.execute(query, [author_id, receiver_id, receiver_id, author_id])

        return result[0]
    }
    static async (){

        const result = pool.execute()

        return result
    }
    static async (){

        const result = pool.execute()

        return result
    }



}

export default MessageRepository