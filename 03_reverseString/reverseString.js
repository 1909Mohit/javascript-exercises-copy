const reverseString = function(string) {
    // const strlen = string.length;
    // const strarr = string.split("");

    // let i = 0;
    // let j = strlen - 1;
    // if(strlen == 0) return '';

    // while (i < j){
    //     const temp = strarr[i];
    //     strarr[i] = strarr[j];
    //     strarr[j] = temp;
    //     i++;
    //     j--;
    // }

    // return strarr.join("");

    // one line answer
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
