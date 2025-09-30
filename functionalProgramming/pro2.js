const sanitize = function(str) {
    let newStr = str.replace(/\s+/g, '');
    return newStr;
};

const strTrim = function(str) {
    return str.trim();
};

const capitalize = function(str) {
    return str.toUpperCase();
};

let finalOutput = function(...fn) {
    return function(value) {
        return fn.reduce((acc, curr) => {
            return curr(acc);  
        }, value);
    };
};

let result = finalOutput(sanitize, strTrim, capitalize)("  Ashutosh Shandilya  ");
console.log(result);  
