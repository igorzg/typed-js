"use strict";
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @name Type
 *
 * @description
 * Type library
 */
class Type {

    constructor(config) {
        this.__dynamic__ = {};
        Object.keys(config).forEach(key => {
            Type.defineProperty(this, config[key], key);
        });
        Object.preventExtensions(this);
    }
    destroy() {
        this.__dynamic__ = null;
    }
}

Type.OBJECT = "object";
Type.STRING = "string";
Type.ARRAY = "array";
Type.REGEX = "regexp";
Type.NUMBER = "number";
Type.BOOLEAN = "boolean";
Type.FUNCTION = "function";
Type.DATE = "date";
Type.UNDEFINED = "undefined";
Type.NULL = "null";

/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @name Type#defineProperty
 *
 * @description
 * Define property
 */
Type.defineProperty = function TypeDefineProperty(obj, type, key) {
    if (!Type.isValidType(type)) {
        throw new Error("Type must be valid type, provided is: " + type);
    }
    Object.defineProperty(obj, key, {
        set: function TypeSet(nVal) {
            var message = `key: ${key}, value: ${Type.getType(nVal)} (${nVal}), is exprected to be: ${type} type.`;
            if (Type.isInitialized(nVal) && !Type.assert(type, nVal)) {
                throw new TypeError(message);
            }
            if (Type.isUndefined(this.__dynamic__)) {
                this.__dynamic__ = {};
            }
            this.__dynamic__[key] = nVal;
        },
        get: function TypeGet() {
            return this.__dynamic__[key];
        }
    });
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @name Type#isValidType
 * @param {Object} type
 *
 * @description
 * Check if is valid type
 */
Type.isValidType = function TypeIsValidType(type) {
    switch (type) {
        case Type.OBJECT:
        case Type.STRING:
        case Type.ARRAY:
        case Type.REGEX:
        case Type.NUMBER:
        case Type.BOOLEAN:
        case Type.FUNCTION:
        case Type.DATE:
            return true;
            break;
        case Type.UNDEFINED:
        case Type.NULL:
            throw new Error("type cannot be:" + type);
            break;

    }
    return false;
};

/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type#assert
 * @param {String} type
 * @param {Object} value
 *
 * @description
 * Assert type
 */
Type.assert = function TypeAssert(type, value) {
    return type === Type.getType(value);
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isInitialized
 * @param {Object} value
 *
 * @description
 * Check if vaule is initial
 */
Type.isInitialized = function TypeInitialized(value) {
    return !Type.isUndefined(value) && !Type.isNull(value);
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.getType
 *
 * @description
 * Get correct type of value
 */
Type.getType = function TypeGetType(value) {
    if (Type.isBoolean(value)) {
        return Type.BOOLEAN;
    } else if (Type.isUndefined(value)) {
        return Type.UNDEFINED;
    } else if (Type.isString(value)) {
        return Type.STRING;
    } else if (Type.isNumber(value)) {
        return Type.NUMBER;
    } else if (Type.isArray(value)) {
        return Type.ARRAY;
    } else if (Type.isNull(value)) {
        return Type.NULL;
    } else if (Type.isFunction(value)) {
        return Type.FUNCTION;
    } else if (Type.isDate(value)) {
        return Type.DATE;
    } else if (Type.isRegExp(value)) {
        return Type.REGEX;
    } else if (Type.isObject(value)) {
        return Type.OBJECT;
    }
    throw new TypeError(value);
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isBoolean
 *
 * @description
 * Check if value is boolean
 */
Type.isBoolean = function TypeIsBoolean(value) {
    return typeof value === "boolean";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isUndefined
 *
 * @description
 * Check if value is un-defined
 */
Type.isUndefined = function TypeIsUndefined(value) {
    return typeof value === "undefined";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isString
 *
 * @description
 * Check if value is string
 */
Type.isString = function TypeIsString(value) {
    return typeof value === "string";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isNumber
 *
 * @description
 * Check if value is isNumber
 */
Type.isNumber = function TypeIsNumber(value) {
    return typeof value === "number";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isArray
 *
 * @description
 * Check if value is array
 */
Type.isArray = function TypeIsArray(value) {
    return Array.isArray(value);
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isNull
 *
 * @description
 * Check if value is funciton
 */
Type.isNull = function TypeIsNull(value) {
    return value === null;
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isFunction
 *
 * @description
 * Check if value is funciton
 */
Type.isFunction = function TypeIsFunction(value) {
    return typeof value === "function";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isArray
 *
 * @description
 * Check if value is array
 */
Type.isDate = function TypeIsDate(value) {
    return Object.prototype.toString.call(value) === "[object Date]";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isRegExp
 *
 * @description
 * Check if object is an regular expression
 */
Type.isRegExp = function TypeIsRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
};
/**
 * @since 0.1.0
 * @author Igor Ivanovic
 * @function
 * @name Type.isObject
 *
 * @description
 * Check if value is object
 */
Type.isObject = function TypeIsObject(value) {
    return !Type.isNull(value) && typeof value === "object";
};

Object.freeze(Type);

module.exports = Type;