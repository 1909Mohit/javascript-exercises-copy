const leapYears = function(year) {
    const ISYEARDIVISIBLEBYFOUR = year % 4 === 0;
    const ISCENTURYYEAR = year % 100 === 0;
    const ISYEARDIVISIBLEBYFOURHUNDRED = year % 400 === 0;
    // if (year % 4 === 0){
    //     if(year % 100 === 0 && year % 400 === 0) return true;
    //     else if(year % 100 === 0) return false;
    //     else return true;
    // }
    // else return false;

    if(ISYEARDIVISIBLEBYFOUR && 
        (!ISCENTURYYEAR || ISYEARDIVISIBLEBYFOURHUNDRED))
        return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;


/*
const leapYears = function (year) {
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (
    isYearDivisibleByFour &&
    (!isCentury || isYearDivisibleByFourHundred)
  ) {
    return true;
  } else {
    return false;
  }
};
*/