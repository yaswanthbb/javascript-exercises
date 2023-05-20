const sumAll = function (start, end) {
    let sum = 0;
    if (
        typeof start === "number" &&
        typeof end === "number" &&
        start > 0 &&
        end > 0
    ) {
        if (start < end) {
            for (let x = start; x <= end; x++) {
                sum += x;
            }
        } else {
            for (let x = end; x <= start; x++) {
                sum += x;
            }
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
