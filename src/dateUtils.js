
// TODO: lastOfMonth() returns the last day of the previous month !== to the last day of this month

export const lastOfMonth = () => {
  let today = new Date();

  // first day of next month
  const first = new Date(today.getFullYear(),today.getMonth()+1,1)   // fixed ??? TODO: Test this
  const last = new Date(first-1)     // last day of previous month

  const mm = last.getMonth()+1    // ????
  const month = (''+mm).padStart(2, '0')
  return [last.getFullYear(), month, last.getDate()]
}

export const todayString = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  const yyyy = today.getFullYear();
  if(dd<10)
  {
      dd=`0${dd}`;
  }

  if(mm<10)
  {
      mm=`0${mm}`;
  }
  return `${mm}/${dd}/${yyyy}`;
}
