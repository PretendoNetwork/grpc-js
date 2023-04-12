"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FriendRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "friends";
function createBaseFriendRequest() {
    return { id: 0, sender: 0, recipient: 0, sent: 0, expires: 0, message: "" };
}
exports.FriendRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== 0) {
            writer.uint32(16).uint32(message.sender);
        }
        if (message.recipient !== 0) {
            writer.uint32(24).uint32(message.recipient);
        }
        if (message.sent !== 0) {
            writer.uint32(32).uint64(message.sent);
        }
        if (message.expires !== 0) {
            writer.uint32(40).uint64(message.expires);
        }
        if (message.message !== "") {
            writer.uint32(50).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFriendRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = longToNumber(reader.uint64());
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.sender = reader.uint32();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.recipient = reader.uint32();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.sent = longToNumber(reader.uint64());
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.expires = longToNumber(reader.uint64());
                    continue;
                case 6:
                    if (tag != 50) {
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
            id: isSet(object.id) ? Number(object.id) : 0,
            sender: isSet(object.sender) ? Number(object.sender) : 0,
            recipient: isSet(object.recipient) ? Number(object.recipient) : 0,
            sent: isSet(object.sent) ? Number(object.sent) : 0,
            expires: isSet(object.expires) ? Number(object.expires) : 0,
            message: isSet(object.message) ? String(object.message) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.sender !== undefined && (obj.sender = Math.round(message.sender));
        message.recipient !== undefined && (obj.recipient = Math.round(message.recipient));
        message.sent !== undefined && (obj.sent = Math.round(message.sent));
        message.expires !== undefined && (obj.expires = Math.round(message.expires));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create: function (base) {
        return exports.FriendRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseFriendRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : 0;
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : 0;
        message.sent = (_d = object.sent) !== null && _d !== void 0 ? _d : 0;
        message.expires = (_e = object.expires) !== null && _e !== void 0 ? _e : 0;
        message.message = (_f = object.message) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
