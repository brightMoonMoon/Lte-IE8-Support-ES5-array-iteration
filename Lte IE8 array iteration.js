(function arrIteration(){if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (each_fun, thisArg) {
        var _this = null,
            iKey = 0,
            len = this.length;
        if (typeof each_fun !== "function") {
            throw new TypeError("each_fun is not a function");
        }
        if (thisArg) {
            _this = thisArg;
        }
        for (; iKey < len; iKey++) {
            each_fun.call(_this, this[iKey], iKey, this);
        }
    };
}
if (!Array.prototype.every) {
    Array.prototype.every = function (every_fun, thisArg) {
        var _this = null,
            iKey = 0,
            len = this.length;
        if (typeof every_fun !== "function") {
            throw new TypeError("every_fun is not a function");
        }
        if (thisArg) {
            _this = thisArg;
        }
        for (; iKey < len; iKey++) {
            var key_Value = this[iKey];
            if (!every_fun.call(_this, key_Value, iKey, this)) {
                return false;
            };
        }
        return true;
    }
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (filter_fun, thisArg) {
        var _this = null;
        arr_fil = [],
            iKey = 0,
            arr_len = this.length;
        if (typeof filter_fun != 'function') {
            throw new Error('filter_fun is not a function');
        }
        if (thisArg) {
            _this = thisArg;
        }
        for (; iKey < arr_len; iKey++) {
            var key_value = this[iKey];
            filter_fun.call(_this, key_value, iKey, this) && arr_fil.push(key_value);
        }
        return arr_fil;
    }
}
if (!Array.prototype.some) {
    Array.prototype.some = function (some_fun, thisArg) {
        var _this = null,
            iKey = 0,
            arr_len = this.length;
        if (typeof some_fun != 'function') {
            throw new typeError('some_fun is not a function')
        }
        if (thisArg) {
            _this = thisArg;
        }
        for (; iKey < arr_len; iKey++) {
            var key_value = this[iKey];
            if (some_fun.call(_this, key_value, iKey, this)) {
                return true;
            }
        }
        return false;
    }
}
if (!Array.prototype.map) {
    Array.prototype.map = function (map_fun, thisArg) {
        var _this = null,
            arr_fil = [],
            iKey = 0,
            len = this.length;
        if (typeof map_fun !== "function") {
            throw new TypeError("map_fun is not a function");
        }
        if (thisArg) {
            _this = thisArg;
        }
        for (; iKey < len; iKey++) {
            var key_value = map_fun.call(_this, this[iKey], iKey, this);
            arr_fil.push(key_value);
        }
        return arr_fil;
    };
}}())