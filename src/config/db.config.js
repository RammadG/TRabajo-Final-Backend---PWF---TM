import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'

const pool = mysql.createPool(
    {
        host: ENVIROMENT.MYSQL.HOST,
        password: ENVIROMENT.MYSQL.PASSWORD,
        user: ENVIROMENT.MYSQL.USERNAME,
        database: ENVIROMENT.MYSQL.DATABASE
    }
)

pool.getConnection().then((result) => {
    console.log('Conexión a mysql exitosa.')
})
.catch(() => {
    console.log('Error de conexión a mysql')
})

export default pool