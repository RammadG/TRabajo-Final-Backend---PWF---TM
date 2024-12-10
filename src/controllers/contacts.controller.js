import ResponseBuilder from "../helpers/ResponseBuilder.js"
import UserRepository from "../repository/user.repository.js"


export const getAllContacts = async (req, res, next) => {
    try {

        const contactos = await UserRepository.getContacts(req.userId)
        const response = new ResponseBuilder()
            .setCode('CONTACTS_DELIVERED_SUCCESS')
            .setMessage('Contactos recibidos con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                contactos: contactos
            })
            .build()

        return res.json(response)

    }
    catch (err) {
        return res.json({
            error: err.message
        }
        )
    }
}

export const addContactController = async (req, res, next) => {
    try {

        const { username } = req.body

        const userGotten = await UserRepository.getUser(username)

        if (!userGotten) {
            return res.json({
                error: 'No se encontró el usuario que quiere agregar'
            })

        }

        if (userGotten.id == req.userId) {
            return res.json({
                error: 'No puedes agregarte a ti mismo como contacto'
            })
        }

        await UserRepository.addContact(req.userId, userGotten.id)

        const response = new ResponseBuilder()
            .setCode('CONTACT_ADD_SUCCESS')
            .setMessage('Contacto agregado con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                contactoAgregado: userGotten
            })
            .build()

        return res.json(response)

    }
    catch (err) {
        if (err.sqlState == 23000) {
            res.json({
                error: 'El usuario que intenta agregar está en sus contactos'
            })
            return
        }
        return res.json({
            error: err.message
        }
        )
    }


}

export const getContactByIdController = async (req, res, next) => {
    try {

        const { userId } = req.params

        const userGotten = await UserRepository.getUserById(userId)

        const response = new ResponseBuilder()
            .setCode('USER_GOT_SUCCESS')
            .setMessage('Usuario obtenido con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                user: userGotten
            })
            .build()

        return res.json(response)
    }
    catch (err) {
        return res.json({
            error: err.message
        }
        )
    }
}

export const deleteContactByIdController = async (req, res, next) => {
    try {

        const { contactId } = req.params

        await UserRepository.deleteContact(req.userId, contactId)

        const response = new ResponseBuilder()
            .setCode('USER_DELETED_SUCCESS')
            .setMessage('Usuario borrado con éxito.')
            .setOk(true)
            .setStatus(200)
            .build()

        return res.json(response)
    }
    catch (err) {
        return res.json({
            error: err.message
        }
        )
    }
}

export const getAllUsersController = async (req, res, next) => {
    try {


        const usuarios = await UserRepository.getAllUsers(req.userId)

        const response = new ResponseBuilder()
            .setCode('USERS_RECEIVED_SUCCESS')
            .setMessage('Usuarios recibidos con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                usuarios: usuarios
            })
            .build()

        return res.json(response)
    }
    catch (err) {
        return res.json({
            error: err.message
        }
        )
    }
}
