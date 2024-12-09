import express from 'express'
import testRouter from './test/testRouter.js'
import authRouter from './routes/authRouter.js'
import ENVIROMENT from './config/enviroment.js'
import pool from './config/db.config.js'
import UserRepository from './repository/user.repository.js'
import MessageRepository from './repository/message.repository.js'
import cors from 'cors'
import contactRouter from './routes/contactRouter.js'
import messageRouter from './routes/messageRouter.js'

const app = express()
const PORT = 8000

app.use(cors({origin : 'https://pwi-trabajo-final-front-end-desplegado.vercel.app'})) 

app.use(express.json())

app.use('/api/test', testRouter)
app.use('/api/auth', authRouter)
app.use('/api/contact', contactRouter)
app.use('/api/message', messageRouter)


app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto http://localhost:' + PORT)
})
