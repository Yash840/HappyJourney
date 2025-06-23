export const arrayStateUpdate = (item, stateArray, stateSetter) => {
  if(stateArray.includes(item)){
    stateSetter(stateArray.filter(i => i !== item))
    return 0;
  }

  stateSetter([...stateArray, item]);
  return 1;
}