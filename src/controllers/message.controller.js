import ResponseBuilder from "../helpers/ResponseBuilder.js"
import MessageRepository from "../repository/message.repository.js"



export const getMessagesController = async (req, res, next) => {
    try {

        const { receiver_id } = req.params

        const mensajes = await MessageRepository.getMessages(req.userId, receiver_id)

        const contacto = await UserRepository.getUserById(receiver_id)// para tomar el nombre del contacto que recibe los mensajes

        const response = new ResponseBuilder()
            .setCode('MESSAGES_DELIVERED_SUCCESS')
            .setMessage('Mensajes recibidos con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                mensajes: mensajes,
                nombreContacto: contacto.name
            })
            .build()

        res.json(response)

    } catch (err) {
        console.log(err)
    }

}

export const addMessageController = async (req, res, next) => {
    try{

        const { receiver_id } = req.params

        const { content } = req.body

        if(!content){
            return res.send('No hay contenido')
        }

        await MessageRepository.addMessage({content: content, receiver_id: receiver_id, author_id: req.userId})

        const response = new ResponseBuilder()
        .setCode('MESSAGE_SEND_SUCCESS')
        .setMessage('Mensaje enviado con éxito.')
        .setOk(true)
        .setStatus(200)
        .setData({
            mensaje: content
        })
        .build()

        res.json(response)

    }
    catch(err){
        console.log(err)
    }
}