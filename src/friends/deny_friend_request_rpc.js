"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DenyFriendRequestResponse = exports.DenyFriendRequestRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "friends";
function createBaseDenyFriendRequestRequest() {
    return { friendRequestId: 0 };
}
exports.DenyFriendRequestRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.friendRequestId !== 0) {
            writer.uint32(8).uint64(message.friendRequestId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenyFriendRequestRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.friendRequestId = longToNumber(reader.uint64());
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
        return { friendRequestId: isSet(object.friendRequestId) ? Number(object.friendRequestId) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.friendRequestId !== undefined && (obj.friendRequestId = Math.round(message.friendRequestId));
        return obj;
    },
    create: function (base) {
        return exports.DenyFriendRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDenyFriendRequestRequest();
        message.friendRequestId = (_a = object.friendRequestId) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseDenyFriendRequestResponse() {
    return { success: false };
}
exports.DenyFriendRequestResponse = {
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
        var message = createBaseDenyFriendRequestResponse();
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
        return exports.DenyFriendRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDenyFriendRequestResponse();
        message.success = (_a = object.success) !== null && _a !== void 0 ? _a : false;
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
