"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.RegisterPNIDRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "account";
function createBaseRegisterPNIDRequest() {
    return { email: "", username: "", password: "", passwordConfirm: "", hCaptchaResponse: "" };
}
exports.RegisterPNIDRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        if (message.passwordConfirm !== "") {
            writer.uint32(34).string(message.passwordConfirm);
        }
        if (message.hCaptchaResponse !== "") {
            writer.uint32(42).string(message.hCaptchaResponse);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRegisterPNIDRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.passwordConfirm = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.hCaptchaResponse = reader.string();
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
            email: isSet(object.email) ? String(object.email) : "",
            username: isSet(object.username) ? String(object.username) : "",
            password: isSet(object.password) ? String(object.password) : "",
            passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
            hCaptchaResponse: isSet(object.hCaptchaResponse) ? String(object.hCaptchaResponse) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
        message.hCaptchaResponse !== undefined && (obj.hCaptchaResponse = message.hCaptchaResponse);
        return obj;
    },
    create: function (base) {
        return exports.RegisterPNIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRegisterPNIDRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.username = (_b = object.username) !== null && _b !== void 0 ? _b : "";
        message.password = (_c = object.password) !== null && _c !== void 0 ? _c : "";
        message.passwordConfirm = (_d = object.passwordConfirm) !== null && _d !== void 0 ? _d : "";
        message.hCaptchaResponse = (_e = object.hCaptchaResponse) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
