// taken from http://jsfiddle.net/wLWuS/11/

export const date2str = (date,pattern) => {
  var z = {
      y:date.getFullYear(),
      M:date.getMonth()+1,
      d:date.getDate(),
      h:date.getHours(),
      m:date.getMinutes(),
      s:date.getSeconds()
  };
  return pattern.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v){
      const len = v.length > 2 ? v.length : 2    // allows y-M-d to produce yy-MM-dd
      const s = '0' + z[v.slice(-1)]
      return s.slice( -(len) );
  });
}
