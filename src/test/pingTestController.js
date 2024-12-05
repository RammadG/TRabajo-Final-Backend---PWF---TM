export const getTestController = (req, res, next) => {
    try{
        res.send('pong')
    }
    catch(err){
        console.log(err)
    }
}

export const PostTestController = (req, res, next) => {
    try{
        console.log(req.body)
        res.send('pong')
    }
    catch(err){
        console.log(err)
    }
}