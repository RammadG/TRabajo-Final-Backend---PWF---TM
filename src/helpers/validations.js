export const validateEmail = (field_name, email) => {

    const regex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)

    const error = !regex.test(email) ? '\n -El dato ingresado no es un email válido.' : null

    return error
}

export const validateLength = (fieldName, fieldValue) => {

    if(fieldName === 'number'){
        const error = fieldValue.length < 6 ? '\n -El numero de telefono debe tener 5 caracteres o más' : null

        return error
    }

    if(fieldName === 'password'){
        const error = fieldValue.length < 8 ? '\n -El password debe tener 8 caracteres o más' : null

        return error
    }
}