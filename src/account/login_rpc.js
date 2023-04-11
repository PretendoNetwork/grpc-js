"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LoginResponse = exports.LoginRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "account";
function createBaseLoginRequest() {
    return { username: "", password: "" };
}
exports.LoginRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLoginRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            username: isSet(object.username) ? String(object.username) : "",
            password: isSet(object.password) ? String(object.password) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    create: function (base) {
        return exports.LoginRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLoginRequest();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseLoginResponse() {
    return { expiresIn: 0, tokenType: "", accessToken: "", refreshToken: "" };
}
exports.LoginResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.expiresIn !== 0) {
            writer.uint32(8).uint32(message.expiresIn);
        }
        if (message.tokenType !== "") {
            writer.uint32(18).string(message.tokenType);
        }
        if (message.accessToken !== "") {
            writer.uint32(26).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(34).string(message.refreshToken);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLoginResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.expiresIn = reader.uint32();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.tokenType = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.refreshToken = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : 0,
            tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
            accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.expiresIn !== undefined && (obj.expiresIn = Math.round(message.expiresIn));
        message.tokenType !== undefined && (obj.tokenType = message.tokenType);
        message.accessToken !== undefined && (obj.accessToken = message.accessToken);
        message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
        return obj;
    },
    create: function (base) {
        return exports.LoginResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseLoginResponse();
        message.expiresIn = (_a = object.expiresIn) !== null && _a !== void 0 ? _a : 0;
        message.tokenType = (_b = object.tokenType) !== null && _b !== void 0 ? _b : "";
        message.accessToken = (_c = object.accessToken) !== null && _c !== void 0 ? _c : "";
        message.refreshToken = (_d = object.refreshToken) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
