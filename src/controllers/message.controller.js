import ResponseBuilder from "../helpers/ResponseBuilder.js"
import MessageRepository from "../repository/message.repository.js"



export const getMessagesController = async (req, res, next) => {
    try {

        const { receiver_id } = req.params

        console.log(receiver_id, req.userId)

        const mensajes = await MessageRepository.getMessages(req.userId, receiver_id)

        const response = new ResponseBuilder()
            .setCode('MESSAGES_DELIVERED_SUCCESS')
            .setMessage('Mensajes recibidos con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData({
                mensajes: mensajes
            })
            .build()

        res.json(response)

    } catch (err) {
        res.send(err)
    }

}