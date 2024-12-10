import pool from "../config/db.config.js"

class MessageRepository {

    static async addMessage(data){
        const { content, author_id, receiver_id } = data

        const result = pool.execute('INSERT INTO Messages(content, author_id, receiver_id) VALUES( ?, ?, ? )', [content, author_id, receiver_id])

        return result
    }
    
    static async getMessages(author_id, receiver_id){

        const query = `SELECT * FROM Messages 
        WHERE author_id = ? AND receiver_id = ? OR author_id = ? AND receiver_id = ?
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