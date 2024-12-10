import express from 'express'
import { addContactController, deleteContactByIdController, getAllContacts, getAllUsersController, getContactByIdController } from '../controllers/contacts.controller.js'
import filterAccessTokenMiddleware from '../middlewares/filterAccessTokenMiddleware.js'

const contactRouter = express.Router()

contactRouter.get('/',filterAccessTokenMiddleware, getAllContacts)
contactRouter.get('/:userId', filterAccessTokenMiddleware, getContactByIdController)
contactRouter.post('/add', filterAccessTokenMiddleware, addContactController)
contactRouter.delete('/:contactId', filterAccessTokenMiddleware, deleteContactByIdController)
contactRouter.get('/get/users', filterAccessTokenMiddleware, getAllUsersController)


export default contactRouter
