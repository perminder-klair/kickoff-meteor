/**
 * normalise date to human way
 * @param date
 * @param formatType
 * @returns {*}
 */
normaliseDate = function (date, formatType) {
    return moment(date, formatType).format('Do MMM YYYY');
};

/**
 * shortcut for console log
 * @param msg
 */
cl = function (msg) {
    console.log(msg);
};

/**
 * Converts to mongodb ISO format
 * @param date - date we are passing
 * @param formatType - date we are passing's format type
 * @returns {Date}
 */
normaliseToISODate = function (date, formatType) {
    return new Date(moment(date, formatType).format())
};