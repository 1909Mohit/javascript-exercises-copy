const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end) ) return 'ERROR';
    if(start < 0 || end < 0) return 'ERROR';

    let sum = 0;
    let i = (start < end) ? start : end;
    const n = (start > end) ? start : end;
    for(; i<= n; i++)
        sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


/* const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;

*/