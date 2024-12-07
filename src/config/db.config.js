import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'

const pool = mysql.createPool(
    {
        host: ENVIROMENT.MYSQL.HOST,
        password: ENVIROMENT.MYSQL.PASSWORD,
        user: ENVIROMENT.MYSQL.USERNAME,
        database: 'bxe3g15z2vfhgtvewwoa'
    }
)

pool.getConnection()
    .then(async (connection) => {
        
        await connection.query(`USE bqldrfsuq0rear1rndtr`)
        console.log('Conexión con MySQL exitosa y base de datos seleccionada')
        connection.release()
    })
    .catch((err) => {
        console.error('Error en la conexión: ',err)
})

export default pool