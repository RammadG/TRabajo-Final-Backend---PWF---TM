import express from 'express'
import testRouter from './routes/testRouter.js'

const app = express()
const PORT = 6000

app.use(express.json())

app.use('/api/test/', testRouter)



app.listen(PORT, () => {
    console.log('El servidor está funcionando en el puerto http://localhost:' + PORT)
})