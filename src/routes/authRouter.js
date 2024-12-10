import express from 'express'
import { forgotPasswordController, loginController, registerController, resetPasswordController } from '../controllers/auth.controller.js'


const authRouter = express.Router()


authRouter.post('/register', registerController)
authRouter.post('/login', loginController)
authRouter.post('/forgot-password', forgotPasswordController)
authRouter.put('/reset-password/:accessToken', resetPasswordController)


export default authRouter
