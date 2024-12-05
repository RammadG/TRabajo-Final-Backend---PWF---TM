import jwt from 'jsonwebtoken'
import ENVIROMENT from '../config/enviroment.js'


const filterAccessTokenMiddleware = (req, res, next) => {
    try {

        

        const accessToken = req.headers.authorization.split(' ')[1]

        const userData = jwt.verify(accessToken, ENVIROMENT.SECRET_KEY)

        req.username = userData.username
        req.userId = userData.id
        next()
    }
    catch (err) {
        res.send(err)
    }



}

export default filterAccessTokenMiddleware