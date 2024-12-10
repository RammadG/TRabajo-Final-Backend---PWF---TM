import ResponseBuilder from "../helpers/ResponseBuilder.js"
import MessageRepository from "../repository/message.repository.js"
import UserRepository from "../repository/user.repository.js"



export const getMessagesController = async (req, res, next) => {
    try {

        const { receiver_id } = req.params

        const author_id = req.userId

        const mensajes = await MessageRepository.getMessages(author_id, receiver_id)

        mensajes.forEach((mensaje, index) => {
            let hora = mensaje.created_at.getHours().toString().padStart(2, '0')
            let minutos = mensaje.created_at.getMinutes().toString().padStart(2, '0')

            mensajes[index].created_at = `${hora}:${minutos}`
        })

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

        return res.json(response)

    } catch (err) {
        res.json({
            error: err.message
        })
    }

}

export const addMessageController = async (req, res, next) => {
    try {

        const { receiver_id } = req.params

        const { content } = req.body

        if (!content) {
            return res.send('No hay contenido')
        }

        await MessageRepository.addMessage({ content: content, receiver_id: receiver_id, author_id: req.userId })

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
    catch (err) {
        console.log(err)
    }
}