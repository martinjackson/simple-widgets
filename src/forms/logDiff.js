
import { diff } from 'deep-object-diff'

export const logDiff = (orig, newData) => {
  const dataDiff = diff(orig, newData)
  console.log('   orig:', orig)
  console.log('   new:', newData)
  console.log('   diff:', dataDiff);

}