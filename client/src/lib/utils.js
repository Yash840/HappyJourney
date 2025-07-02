export const arrayStateUpdate = (item, stateArray, stateSetter) => {
  if(stateArray.includes(item)){
    stateSetter(stateArray.filter(i => i !== item))
    return 0;
  }

  stateSetter([...stateArray, item]);
  return 1;
}

export const getTime = (date) => {
  const dt = new Date(date);
  const hrs = dt.getHours();
  const min = dt.getMinutes();

  return `${hrs} : ${min}`;
}