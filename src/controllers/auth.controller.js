import ResponseBuilder from "../helpers/ResponseBuilder.js"
import { validateEmail, validateLength } from "../helpers/validations.js"
import UserRepository from "../repository/user.repository.js"
import bcrypt from 'bcrypt'
import emailTransporter from "../helpers/emailTransporter.js"
import jwt from 'jsonwebtoken'
import ENVIROMENT from "../config/enviroment.js"


export const registerController = async (req, res, next) => {
    try {

        const user_data = req.body

        const validations = {
            email: [validateEmail],
            password: [validateLength],
            number: [validateLength]
        }

        let errores = ''

        for (let field_name in user_data) {
            validations[field_name].map((validation) => {
                const error = validation(field_name, user_data[field_name])

                error ? errores += error : null

                return
            })
        }

        if (errores) {
            errores ? errores = 'Hubieron los siguientes errores:' + errores : null

            const response = new ResponseBuilder()
                .setCode('VALUES_VALIDATION_ERROR')
                .setMessage('Error de validación de datos')
                .setOk('false')
                .setStatus(400)
                .setData({
                    errors: errores
                }
                )
                .build()

            return res.json(response)
        }

        await UserRepository.createUser(user_data)

        emailTransporter.sendMail({
            to: user_data.email,
            subject: 'Confirmación de registro',
            html: '¡Su usuario ha sido creado con éxito!'
        })

        const response = new ResponseBuilder()
            .setCode('USER_CREATED_SUCCESS')
            .setMessage('Usuario creado con éxito.')
            .setOk(true)
            .setStatus(200)
            .setData(
                {
                    userCreated: user_data
                }
            )
            .build()

        res.json(response)

    }
    catch (err) {
        console.log(err)
    }
}

export const loginController = async (req, res, next) => {

    try {
        const { username, password } = req.body

        console.log(req.body)

        const userGotten = await UserRepository.getUser({
            username: username
        })

        console.log(userGotten)

        if (!userGotten) {
            return res.json({
                error: 'Usuario no encontrado.'
            })
            
        }

        const validatePassword = await bcrypt.compare(password, userGotten.password)

        if (!validatePassword) {
            return res.json({
                error: 'La contraseña es incorrecta'
            })
            
        }

        const accessToken = jwt.sign({
            username: username,
            id: userGotten.id
        },
            ENVIROMENT.SECRET_KEY,
            {
                expiresIn: '1d'
            }
        )

        const response = new ResponseBuilder()
            .setCode('LOGIN_SUCCESS')
            .setMessage('Inicio de sesión exitoso.')
            .setOk(true)
            .setStatus(200)
            .setData(
                {
                    accessToken: accessToken
                }
            )
            .build()

        return res.json(response)
    }
    catch (err) {
        console.log(err)
    }





}