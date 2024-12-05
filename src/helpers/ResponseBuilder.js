export default class ResponseBuilder {

    constructor(){
        this.ok = false,
        this.status = 0,
        this.message = '',
        this.data = null,
        this.code = 0
    }

setOk(ok){
    this.ok = ok
    return this
}

setStatus(status){
    this.status = status
    return this
}

setMessage(message){
    this.message = message
    return this
}

setData(data){
    this.data = data
    return this
}

setCode(code){
    this.code = code
    return this
}

build(){
    return this
}
}