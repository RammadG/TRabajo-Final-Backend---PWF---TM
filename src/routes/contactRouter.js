import express from 'express'
import { getAllContacts } from '../controllers/contacts.controller.js'
import filterAccessTokenMiddleware from '../middlewares/filterAccessTokenMiddleware.js'

const contactRouter = express.Router()

contactRouter.get('/',filterAccessTokenMiddleware, getAllContacts)









export default contactRouter
