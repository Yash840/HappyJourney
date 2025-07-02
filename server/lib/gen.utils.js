export const dateFormatter = (date) => {
  const day = date.getDate();
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  return {
    locale : `${day} ${months[month]} ${year}`, // dd Month yyyy
    formal : `${year}-${month+1}-${day}` // yyyy-mm-dd
  }
}

console.log(dateFormatter(new Date()).locale)

export const compareFormattedDates = (date1, date2) => {
  const [year1, month1, day1] = day1.split('/');
  const [year2, month2, day2] = day2.split('/');

  if(Number (year1) > Number (year2)) return 0;
  if(Number (month1) > Number (month2)) return 0;
  if(Number (day1) > Number (day2)) return 0;

  return 1;
}