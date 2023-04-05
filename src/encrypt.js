import CryptoJS from 'crypto-js'

const ekey='MDHKE-GZPUR-SJRNP-DFIEO-XWZKK-UPACJ-GVXMM-KLCRE-OXWLH-KWCVA-JRKEK-RTFFY'
const list='U2FsdGVkX1/9AWZf+ig7cTMoqm/l6Je0hmSq1luhRo+aEA4n78UPdzVpscziF0yzr1baB8Ef0sGv4OtaibyWzA=='

export const getList = () => {
    return decrypt(list).split(',')
}

export const decrypt = (msg) => {
    if (!ekey) {
       return msg
    }

    return CryptoJS.AES.decrypt(msg, ekey).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (msg) => {
    if (!ekey) {
        return msg
     }
     
     return CryptoJS.AES.encrypt(msg, ekey).toString();
}

