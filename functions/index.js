const { chunk } = require('./chunk');
const { removeFalsy } = require('./removeFalsy');
const { find } = require('./find');
const { findLast } = require('./findLast');
const { unique } = require('./unique');
const { remove } = require('./remove');
const { concat } = require('./concat');


module.exports = (function () {
    return {
        chunk,
        removeFalsy,
        find,
        findLast,
        unique,
        remove,
        concat
    }
})();