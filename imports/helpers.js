import moment from 'moment';

/**
 * normalise date to human way
 * @param date
 * @param formatType
 * @returns {*}
 */
module.exports = normaliseDate = function (date, formatType){
    return moment(date, formatType).format('Do MMM YYYY');
};

/**
 * Converts to mongodb ISO format
 * @param date - date we are passing
 * @param formatType - date we are passing's format type
 * @returns {Date}
 */
module.exports = normaliseToISODate = function (date, formatType) {
    return new Date(moment(date, formatType).format())
};