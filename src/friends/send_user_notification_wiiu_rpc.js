"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SendUserNotificationWiiURequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "friends";
function createBaseSendUserNotificationWiiURequest() {
    return { pid: 0, notificationData: new Uint8Array() };
}
exports.SendUserNotificationWiiURequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.pid !== 0) {
            writer.uint32(8).uint32(message.pid);
        }
        if (message.notificationData.length !== 0) {
            writer.uint32(18).bytes(message.notificationData);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendUserNotificationWiiURequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.pid = reader.uint32();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.notificationData = reader.bytes();
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
            pid: isSet(object.pid) ? Number(object.pid) : 0,
            notificationData: isSet(object.notificationData) ? bytesFromBase64(object.notificationData) : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        message.notificationData !== undefined &&
            (obj.notificationData = base64FromBytes(message.notificationData !== undefined ? message.notificationData : new Uint8Array()));
        return obj;
    },
    create: function (base) {
        return exports.SendUserNotificationWiiURequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSendUserNotificationWiiURequest();
        message.pid = (_a = object.pid) !== null && _a !== void 0 ? _a : 0;
        message.notificationData = (_b = object.notificationData) !== null && _b !== void 0 ? _b : new Uint8Array();
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = tsProtoGlobalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin_1.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
