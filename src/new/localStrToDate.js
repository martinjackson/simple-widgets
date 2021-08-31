
let ltzCode = null;

const getLTZ = () => {

  if (ltzCode == null) {
    var now = (new Date()) + ""
    var i = now.indexOf(" GMT");
    if (i > -1)
        ltzCode = now.substring(i,i+10)

    console.log('ltzCode:',ltzCode);
  }

   return ltzCode
}

export const localStrToDate = (target) => {

  if (target == null)
     return null;

  var i = target.indexOf(" GMT");
  if (i == -1)   // missing
     target += getLTZ()
  return new Date(target);

}

