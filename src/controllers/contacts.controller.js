import ResponseBuilder from "../helpers/ResponseBuilder.js"
import UserRepository from "../repository/user.repository.js"


export const getAllContacts = async (req, res, next) => {
    try{

        const contactos = await UserRepository.getContacts(req.userId)

        console.log(contactos)

        const response = new ResponseBuilder()
        .setCode('CONTACTS_DELIVERED_SUCCESS')
        .setMessage('Contactos recibidos con éxito.')
        .setOk(true)
        .setStatus(200)
        .setData({
            contactos: contactos
        })
        .build()

        res.json(response)

    }
    catch(err){

    }


}