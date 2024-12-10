import express from "express"
import filterAccessTokenMiddleware from "../middlewares/filterAccessTokenMiddleware.js"
import { addMessageController, getMessagesController } from "../controllers/message.controller.js"


const messageRouter = express.Router()


messageRouter.get('/:receiver_id', filterAccessTokenMiddleware, getMessagesController)
messageRouter.post('/:receiver_id', filterAccessTokenMiddleware, addMessageController)


export default messageRouter