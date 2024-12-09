import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'

const pool = mysql.createPool(
    {
        host: 'bxe3g15z2vfhgtvewwoa-mysql.services.clever-cloud.com',
        password: ENVIROMENT.MYSQL.PASSWORD,
        user: ENVIROMENT.MYSQL.USERNAME,
        database: ENVIROMENT.MYSQL.DATABASE
    }
)

pool.getConnection()
    .then(async (connection) => {
        
        await connection.query(`USE bxe3g15z2vfhgtvewwoa`)
        console.log('Conexión con MySQL exitosa y base de datos seleccionada')
        connection.release()
    })
    .catch((err) => {
        console.error('Error en la conexión: ',err)
})

export default pool