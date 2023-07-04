
export function now() { return new Date(); }

const twoDigit = (n) => {
  const pad = (n < 10) ? '0' : ''
  return pad+n
}

const threeDigit = (n) => {
  const pad = (n < 10) ? '00' : (n < 100) ? '0' : ''
  return pad+n
}

export const TS = () => {
  const d = new Date()

  return '['+
         d.getFullYear()+'-'+
         twoDigit(d.getMonth()+1)+'-'+
         twoDigit(d.getDate())+' '+
         twoDigit(d.getHours())+':'+
         twoDigit(d.getMinutes())+':'+
         twoDigit(d.getSeconds())+'.'+
         twoDigit(d.getMilliseconds())+
         ']'
}

let dtsStart = null
export const dTS = () => {

  const d = new Date()

  if (dtsStart == null)
    dtsStart = d

  const delta = d - dtsStart

  return '['+delta+']'
}