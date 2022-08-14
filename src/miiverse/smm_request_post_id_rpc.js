"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SMMRequestPostIdResponse = exports.SMMRequestPostIdRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "miiverse";
function createBaseSMMRequestPostIdRequest() {
    return { courseId: 0 };
}
exports.SMMRequestPostIdRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.courseId !== 0) {
            writer.uint32(8).uint64(message.courseId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSMMRequestPostIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.courseId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            courseId: isSet(object.courseId) ? Number(object.courseId) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.courseId !== undefined &&
            (obj.courseId = Math.round(message.courseId));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSMMRequestPostIdRequest();
        message.courseId = (_a = object.courseId) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseSMMRequestPostIdResponse() {
    return { postId: 0 };
}
exports.SMMRequestPostIdResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.postId !== 0) {
            writer.uint32(8).uint64(message.postId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSMMRequestPostIdResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.postId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            postId: isSet(object.postId) ? Number(object.postId) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.postId !== undefined && (obj.postId = Math.round(message.postId));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSMMRequestPostIdResponse();
        message.postId = (_a = object.postId) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
