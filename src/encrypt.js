import CryptoJS from 'crypto-js'

export const getList = () => {
    if (!window.env.list) {
       return []
    }
       
    return decrypt(window.env.list).split(',')
}

export const decrypt = (msg) => {
    if (!window.env.ekey) {
       return msg
    }

    return CryptoJS.AES.decrypt(msg, window.env.ekey).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (msg) => {
    if (!window.env.ekey) {
        return msg
     }
     
     return CryptoJS.AES.encrypt(msg, window.env.ekey).toString();
}

