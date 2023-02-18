export const getFormattedDates = (times) => {
    const formattedDates = times.slice(0, 7).map((oneDate) => {
      const parts = oneDate.split('T', 2);
      const fullDates = parts[0];
      const dates = fullDates.split('-');
      const formattedDates = `${dates[2]}-${dates[1]}`;
  
      return formattedDates;
    });
  
    return formattedDates;
  };
  
  export const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  
  export const getDataFromCurrentDate = (
    dateString
  ) => {
    const isDate = dateFormatRegex.test(dateString);
    if (isDate) {
      const date = new Date(dateString);
      if (
        date.getFullYear() === new Date().getFullYear() &&
        date.getMonth() === new Date().getMonth() &&
        date.getDate() === new Date().getDate()
      ) {
        return dateString;
      }
    }
    return undefined;
  };
  
  export const getDates = (times) => {
    const dates = times.map((oneDate) => {
      const parts = oneDate.split('T', 2);
      const date = parts[0];
      return date;
    });
  
    return dates;
  };
  
  export const getDate = (date) => {
    const parts = date.split('T', 2);
    const currentDate = parts[0];
  
    return currentDate;
  };
  
  export const getCurrentDayTimes = (dates) => {
    const currentDayTimes = dates.filter((date) => {
      return getDataFromCurrentDate(date);
    });
  
    return currentDayTimes;
  };
  
  export const getJourneyTime = (time) => {
    if (time === '') {
      return '';
    }
  
    const daysRest = time.split('d', 2);
    const hourTimeSec = daysRest[1].split(':', 2);
    const finalTime = `${hourTimeSec[0]}:${hourTimeSec[1]}`;
  
    return finalTime;
  };
  
  export const getSbbTime = (time) => {
    if (time === '') {
      return '';
    }
  
    const dateTime = time.split('T', 2);
    const timePart = dateTime[1];
    const hourMinSecPlus = timePart.split(':', 3);
    const hour = hourMinSecPlus[0];
    const min = hourMinSecPlus[1];
  
    const finalTime = `${hour}:${min}`;
  
    return finalTime;
  };
  
  export const getTimes = (times) => {
    const currentTimes = times.slice(0, 24).map((oneDate) => {
      const parts = oneDate.split('T', 2);
      const times = parts[1];
      return times;
    });
  
    return currentTimes;
  };
  
  export const getMeasures = (measures) => {
    const currentMeasures = measures.splice(0, 24).map((temp) => {
      return temp;
    });
  
    return currentMeasures;
  };
  
  export const getTodaysSunSet = (sunset) => {
    const times = getTimes(sunset);
  
    return times[0];
  };
  
  export const getTodaysSunRise = (sunset) => {
    const times = getTimes(sunset);
  
    return times[0];
  };
  
  export const getTodaysMaxTemp = (maxTemps) => {
    return maxTemps[0];
  };
  
  export const getTodaysMinTemp = (minTemps) => {
    return minTemps[0];
  };
  