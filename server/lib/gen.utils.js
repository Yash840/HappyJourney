export const dateFormatter = (date) => {
  const day = date.getDate();
  const month = date.getMonth(); // 0-11
  const year = date.getFullYear();

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  return {
    locale : `${day} ${months[month]} ${year}`, // dd Month yyyy
    formal : `${year}/${month+1}/${day}` // yyyy/mm/dd
  }
}

export const compareFormattedDates = (date1, date2) => {
  const [year1, month1, date1] = date1.split('/');
  const [year2, month2, date2] = date2.split('/');

  if(Number (year1) > Number (year2)) return 0;
  if(Number (month1) > Number (month2)) return 0;
  if(Number (date1) > Number (date2)) return 0;

  return 1;
}