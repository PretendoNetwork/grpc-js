"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.IsBannedResponse = exports.IsBannedRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "account";
function createBaseIsBannedRequest() {
    return { username: "" };
}
exports.IsBannedRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIsBannedRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.username = reader.string();
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
        return { username: isSet(object.username) ? String(object.username) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.username !== undefined && (obj.username = message.username);
        return obj;
    },
    create: function (base) {
        return exports.IsBannedRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseIsBannedRequest();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseIsBannedResponse() {
    return { banned: false };
}
exports.IsBannedResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.banned === true) {
            writer.uint32(8).bool(message.banned);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIsBannedResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.banned = reader.bool();
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
        return { banned: isSet(object.banned) ? Boolean(object.banned) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.banned !== undefined && (obj.banned = message.banned);
        return obj;
    },
    create: function (base) {
        return exports.IsBannedResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseIsBannedResponse();
        message.banned = (_a = object.banned) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
