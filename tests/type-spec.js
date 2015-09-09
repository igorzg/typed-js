"use strict";

var Type = require('../');

describe('TypeJs', function () {

    it('Should be null', function () {
        expect(Type.isNull({})).toBe(false);
        expect(Type.isNull([])).toBe(false);
        expect(Type.isNull(function () {
        })).toBe(false);
        expect(Type.isNull(undefined)).toBe(false);
        expect(Type.isNull(new Date)).toBe(false);
        expect(Type.isNull(new RegExp)).toBe(false);
        expect(Type.isNull("")).toBe(false);
        expect(Type.isNull(1)).toBe(false);
        expect(Type.isNull(0)).toBe(false);
        expect(Type.isNull(false)).toBe(false);
        expect(Type.isNull(true)).toBe(false);
        expect(Type.isNull(null)).toBe(true);
    });


    it('Should be object', function () {
        expect(Type.isObject({})).toBe(true);
        expect(Type.isObject([])).toBe(true);
        expect(Type.isObject(function () {
        })).toBe(false);
        expect(Type.isObject(undefined)).toBe(false);
        expect(Type.isObject(new Date)).toBe(true);
        expect(Type.isObject(new RegExp)).toBe(true);
        expect(Type.isObject("")).toBe(false);
        expect(Type.isObject(1)).toBe(false);
        expect(Type.isObject(0)).toBe(false);
        expect(Type.isObject(false)).toBe(false);
        expect(Type.isObject(true)).toBe(false);
        expect(Type.isObject(null)).toBe(false);
    });


    it('Should be regex', function () {
        expect(Type.isRegExp({})).toBe(false);
        expect(Type.isRegExp([])).toBe(false);
        expect(Type.isRegExp(function () {
        })).toBe(false);
        expect(Type.isRegExp(undefined)).toBe(false);
        expect(Type.isRegExp(new Date)).toBe(false);
        expect(Type.isRegExp(new RegExp)).toBe(true);
        expect(Type.isRegExp(/abc/g)).toBe(true);
        expect(Type.isRegExp("")).toBe(false);
        expect(Type.isRegExp(1)).toBe(false);
        expect(Type.isRegExp(0)).toBe(false);
        expect(Type.isRegExp(false)).toBe(false);
        expect(Type.isRegExp(true)).toBe(false);
        expect(Type.isRegExp(null)).toBe(false);
    });


    it('Should be date', function () {
        expect(Type.isDate({})).toBe(false);
        expect(Type.isDate([])).toBe(false);
        expect(Type.isDate(function () {
        })).toBe(false);
        expect(Type.isDate(undefined)).toBe(false);
        expect(Type.isDate(new Date)).toBe(true);
        expect(Type.isDate(new RegExp)).toBe(false);
        expect(Type.isDate("")).toBe(false);
        expect(Type.isDate(1)).toBe(false);
        expect(Type.isDate(0)).toBe(false);
        expect(Type.isDate(false)).toBe(false);
        expect(Type.isDate(true)).toBe(false);
        expect(Type.isDate(null)).toBe(false);
    });


    it('Should be function', function () {
        expect(Type.isFunction({})).toBe(false);
        expect(Type.isFunction([])).toBe(false);
        expect(Type.isFunction(function () {
        })).toBe(true);
        expect(Type.isFunction(undefined)).toBe(false);
        expect(Type.isFunction(new Date)).toBe(false);
        expect(Type.isFunction(new RegExp)).toBe(false);
        expect(Type.isFunction("")).toBe(false);
        expect(Type.isFunction(1)).toBe(false);
        expect(Type.isFunction(0)).toBe(false);
        expect(Type.isFunction(false)).toBe(false);
        expect(Type.isFunction(true)).toBe(false);
        expect(Type.isFunction(null)).toBe(false);
    });


    it('Should be array', function () {
        expect(Type.isArray({})).toBe(false);
        expect(Type.isArray([])).toBe(true);
        expect(Type.isArray(function () {
        })).toBe(false);
        expect(Type.isArray(undefined)).toBe(false);
        expect(Type.isArray(new Date)).toBe(false);
        expect(Type.isArray(new RegExp)).toBe(false);
        expect(Type.isArray("")).toBe(false);
        expect(Type.isArray(1)).toBe(false);
        expect(Type.isArray(0)).toBe(false);
        expect(Type.isArray(false)).toBe(false);
        expect(Type.isArray(true)).toBe(false);
        expect(Type.isArray(null)).toBe(false);
    });


    it('Should be number', function () {
        expect(Type.isNumber({})).toBe(false);
        expect(Type.isNumber([])).toBe(false);
        expect(Type.isNumber(function () {
        })).toBe(false);
        expect(Type.isNumber(undefined)).toBe(false);
        expect(Type.isNumber(new Date)).toBe(false);
        expect(Type.isNumber(new RegExp)).toBe(false);
        expect(Type.isNumber("")).toBe(false);
        expect(Type.isNumber(1)).toBe(true);
        expect(Type.isNumber(0)).toBe(true);
        expect(Type.isNumber(NaN)).toBe(true);
        expect(Type.isNumber(false)).toBe(false);
        expect(Type.isNumber(true)).toBe(false);
        expect(Type.isNumber(null)).toBe(false);
    });


    it('Should be string', function () {
        expect(Type.isString({})).toBe(false);
        expect(Type.isString([])).toBe(false);
        expect(Type.isString(function () {
        })).toBe(false);
        expect(Type.isString(undefined)).toBe(false);
        expect(Type.isString(new Date)).toBe(false);
        expect(Type.isString(new RegExp)).toBe(false);
        expect(Type.isString("")).toBe(true);
        expect(Type.isString(1)).toBe(false);
        expect(Type.isString(0)).toBe(false);
        expect(Type.isString(NaN)).toBe(false);
        expect(Type.isString(false)).toBe(false);
        expect(Type.isString(true)).toBe(false);
        expect(Type.isString(null)).toBe(false);
    });


    it('Should be boolean', function () {
        expect(Type.isBoolean({})).toBe(false);
        expect(Type.isBoolean([])).toBe(false);
        expect(Type.isBoolean(function () {
        })).toBe(false);
        expect(Type.isBoolean(undefined)).toBe(false);
        expect(Type.isBoolean(new Date)).toBe(false);
        expect(Type.isBoolean(new RegExp)).toBe(false);
        expect(Type.isBoolean("")).toBe(false);
        expect(Type.isBoolean(1)).toBe(false);
        expect(Type.isBoolean(0)).toBe(false);
        expect(Type.isBoolean(NaN)).toBe(false);
        expect(Type.isBoolean(false)).toBe(true);
        expect(Type.isBoolean(true)).toBe(true);
        expect(Type.isBoolean(null)).toBe(false);
    });

    it('Should be undefined', function () {
        expect(Type.isUndefined({})).toBe(false);
        expect(Type.isUndefined([])).toBe(false);
        expect(Type.isUndefined(function () {
        })).toBe(false);
        expect(Type.isUndefined(undefined)).toBe(true);
        expect(Type.isUndefined(new Date)).toBe(false);
        expect(Type.isUndefined(new RegExp)).toBe(false);
        expect(Type.isUndefined("")).toBe(false);
        expect(Type.isUndefined(1)).toBe(false);
        expect(Type.isUndefined(0)).toBe(false);
        expect(Type.isUndefined(NaN)).toBe(false);
        expect(Type.isUndefined(false)).toBe(false);
        expect(Type.isUndefined(true)).toBe(false);
        expect(Type.isUndefined(null)).toBe(false);
    });

    it('Should be initialized', function () {
        expect(Type.isInitialized({})).toBe(true);
        expect(Type.isInitialized([])).toBe(true);
        expect(Type.isInitialized(function () {
        })).toBe(true);
        expect(Type.isInitialized(undefined)).toBe(false);
        expect(Type.isInitialized(new Date)).toBe(true);
        expect(Type.isInitialized(new RegExp)).toBe(true);
        expect(Type.isInitialized("")).toBe(true);
        expect(Type.isInitialized(1)).toBe(true);
        expect(Type.isInitialized(0)).toBe(true);
        expect(Type.isInitialized(NaN)).toBe(true);
        expect(Type.isInitialized(false)).toBe(true);
        expect(Type.isInitialized(true)).toBe(true);
        expect(Type.isInitialized(null)).toBe(false);
    });


    it('Should be get correct type', function () {
        expect(Type.getType({})).toBe("object");
        expect(Type.getType([])).toBe("array");
        expect(Type.getType(function () {
        })).toBe("function");
        expect(Type.getType(undefined)).toBe("undefined");
        expect(Type.getType(new Date)).toBe("date");
        expect(Type.getType(new RegExp)).toBe("regexp");
        expect(Type.getType("")).toBe("string");
        expect(Type.getType(1)).toBe("number");
        expect(Type.getType(0)).toBe("number");
        expect(Type.getType(NaN)).toBe("number");
        expect(Type.getType(Number.POSITIVE_INFINITY)).toBe("number");
        expect(Type.getType(Number.NEGATIVE_INFINITY)).toBe("number");
        expect(Type.getType(false)).toBe("boolean");
        expect(Type.getType(true)).toBe("boolean");
        expect(Type.getType(null)).toBe("null");
    });


    it('Should be asserted correctly', function () {
        expect(Type.assert(Type.OBJECT, {})).toBe(true);
        expect(Type.assert(Type.ARRAY, [])).toBe(true);
        expect(Type.assert(Type.FUNCTION, function () {
        })).toBe(true);
        expect(Type.assert(Type.UNDEFINED, undefined)).toBe(true);
        expect(Type.assert(Type.DATE, new Date)).toBe(true);
        expect(Type.assert(Type.REGEX, new RegExp)).toBe(true);
        expect(Type.assert(Type.STRING, "")).toBe(true);
        expect(Type.assert(Type.NUMBER, 1)).toBe(true);
        expect(Type.assert(Type.NUMBER, 0)).toBe(true);
        expect(Type.assert(Type.NUMBER, NaN)).toBe(true);
        expect(Type.assert(Type.NUMBER, Number.POSITIVE_INFINITY)).toBe(true);
        expect(Type.assert(Type.NUMBER, Number.NEGATIVE_INFINITY)).toBe(true);
        expect(Type.assert(Type.BOOLEAN, false)).toBe(true);
        expect(Type.assert(Type.BOOLEAN, true)).toBe(true);
        expect(Type.assert(Type.NULL, null)).toBe(true);
        expect(Type.assert(Type.NULL, undefined)).toBe(false);
    });


    it('Do class instance with types', function () {
        class User extends Type {
            constructor(name, password) {
                super({
                    username: Type.STRING,
                    password: Type.STRING
                });
                this.username = name;
                this.password = password;
            }
            getUserName() {
                return this.username;
            }
            getPassword() {
                return this.password;
            }
        }

        var user1 = new User('Igor', 'Ivanovic');
        expect(user1.getUserName()).toBe('Igor');
        expect(user1.getPassword()).toBe('Ivanovic');
        try {
            user1.index = 1;
        } catch (e) {
            expect(e.message).toBe("Can't add property index, object is not extensible");
        }
        user1.username = 'Ana';
        expect(user1.getUserName()).toBe('Ana');
        user1.destroy();
        expect(user1.__dynamic__).toBe(null);
    });
});