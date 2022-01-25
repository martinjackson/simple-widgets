import CryptoJS from 'crypto-js'

export const getList = () => {    
    return decrypt(window.env.list).split(',')
}

export const decrypt = (msg) => {
    return CryptoJS.AES.decrypt(msg, window.env.ekey).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (msg) => {
    return CryptoJS.AES.encrypt(msg, window.env.ekey).toString();
}

