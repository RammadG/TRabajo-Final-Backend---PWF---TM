import express from 'express'
import { addContactController, deleteContactByIdController, getAllContacts, getContactByIdController } from '../controllers/contacts.controller.js'
import filterAccessTokenMiddleware from '../middlewares/filterAccessTokenMiddleware.js'

const contactRouter = express.Router()

contactRouter.get('/',filterAccessTokenMiddleware, getAllContacts)
contactRouter.get('/:userId', filterAccessTokenMiddleware, getContactByIdController)
contactRouter.post('/add', filterAccessTokenMiddleware, addContactController)
contactRouter.delete('/:contactId', filterAccessTokenMiddleware, deleteContactByIdController)








export default contactRouter
