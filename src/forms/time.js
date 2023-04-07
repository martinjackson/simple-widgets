
export function now() { return new Date(); }

const twoDigit = (n) => {
  return (n < 10) ? '0'+n : ''+n
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
         d.getMilliseconds()+
         ']'
}