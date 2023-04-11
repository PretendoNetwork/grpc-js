"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GetBasicUserDataResponse = exports.GetBasicUserDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var mii_1 = require("./mii");
exports.protobufPackage = "account";
function createBaseGetBasicUserDataRequest() {
    return { username: "" };
}
exports.GetBasicUserDataRequest = {
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
        var message = createBaseGetBasicUserDataRequest();
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
        return exports.GetBasicUserDataRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBasicUserDataRequest();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseGetBasicUserDataResponse() {
    return { username: "", accessLevel: 0, mii: undefined };
}
exports.GetBasicUserDataResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.accessLevel !== 0) {
            writer.uint32(16).sint32(message.accessLevel);
        }
        if (message.mii !== undefined) {
            mii_1.Mii.encode(message.mii, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBasicUserDataResponse();
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
                    if (tag != 16) {
                        break;
                    }
                    message.accessLevel = reader.sint32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.mii = mii_1.Mii.decode(reader, reader.uint32());
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
            accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
            mii: isSet(object.mii) ? mii_1.Mii.fromJSON(object.mii) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
        message.mii !== undefined && (obj.mii = message.mii ? mii_1.Mii.toJSON(message.mii) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetBasicUserDataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetBasicUserDataResponse();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.accessLevel = (_b = object.accessLevel) !== null && _b !== void 0 ? _b : 0;
        message.mii = (object.mii !== undefined && object.mii !== null) ? mii_1.Mii.fromPartial(object.mii) : undefined;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
