function number_add_asterisk(number_string,show_digits,asterisk_amount) {
    let number_length = number_string.length
    let get_encryption_number = number_string
    let get_asterisk_string = "*"
    for(let a=0;a<asterisk_amount;a++) {
        get_asterisk_string = get_asterisk_string+"*"
    }
    if(number_length > show_digits*2) {
        get_encryption_number = get_encryption_number.substr(0, show_digits)+get_asterisk_string+get_encryption_number.substr(number_length-show_digits,number_length)
    }
    return get_encryption_number
}

function genID(length){
    return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
}

export {
    number_add_asterisk,
    genID
}