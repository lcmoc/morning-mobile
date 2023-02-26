export const getJourneyTime = (time) => {
  if (time === '') {
    return '';
  }

  const daysRest = time.split('d', 2);
  const hourTimeSec = daysRest[1].split(':', 2);
  const finalTime = `${hourTimeSec[0] > 0 ? `${hourTimeSec[0]}h ` : ''}${hourTimeSec[1]}min`;

  return finalTime;
};

export const getSbbTime = (time) => {
  if (time === '') {
    return '';
  }

  const dateTime = time?.split('T', 2);
  const timePart = dateTime[1];
  const hourMinSecPlus = timePart.split(':', 3);
  const hour = hourMinSecPlus[0];
  const min = hourMinSecPlus[1];

  const finalTime = `${hour}:${min}`;

  return finalTime;
};
