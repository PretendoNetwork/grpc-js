"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SendUserFriendRequestResponse = exports.SendUserFriendRequestRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "friends";
function createBaseSendUserFriendRequestRequest() {
    return { sender: 0, recipient: 0, message: "" };
}
exports.SendUserFriendRequestRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.sender !== 0) {
            writer.uint32(8).uint32(message.sender);
        }
        if (message.recipient !== 0) {
            writer.uint32(16).uint32(message.recipient);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendUserFriendRequestRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.sender = reader.uint32();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.recipient = reader.uint32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.message = reader.string();
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
            sender: isSet(object.sender) ? Number(object.sender) : 0,
            recipient: isSet(object.recipient) ? Number(object.recipient) : 0,
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sender !== undefined && (obj.sender = Math.round(message.sender));
        message.recipient !== undefined && (obj.recipient = Math.round(message.recipient));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create: function (base) {
        return exports.SendUserFriendRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSendUserFriendRequestRequest();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : 0;
        message.recipient = (_b = object.recipient) !== null && _b !== void 0 ? _b : 0;
        message.message = (_c = object.message) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseSendUserFriendRequestResponse() {
    return { success: false };
}
exports.SendUserFriendRequestResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendUserFriendRequestResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.success = reader.bool();
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
        return { success: isSet(object.success) ? Boolean(object.success) : false };
    },
    toJSON: function (message) {
        var obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    create: function (base) {
        return exports.SendUserFriendRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSendUserFriendRequestResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
