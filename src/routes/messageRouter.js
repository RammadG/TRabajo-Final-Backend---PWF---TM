import express from "express"
import filterAccessTokenMiddleware from "../middlewares/filterAccessTokenMiddleware.js"
import { getMessagesController } from "../controllers/message.controller.js"


const messageRouter = express.Router()


messageRouter.get('/:receiver_id', filterAccessTokenMiddleware, getMessagesController)






export default messageRouter