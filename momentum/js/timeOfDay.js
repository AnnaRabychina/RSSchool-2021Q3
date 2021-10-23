 export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  
  if (hours >= 0 && hours < 6) {
    return 'night';
  }
  
  if (hours >= 6 && hours < 12) {
    return 'morning';
  }

  if (hours >= 12 && hours < 18) {
    return 'day';
  }

  if (hours >= 18 && hours < 24) {
    return 'evening';
  }
}
  





