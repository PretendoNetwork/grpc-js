"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GetUserFriendPIDsResponse = exports.GetUserFriendPIDsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "friends";
function createBaseGetUserFriendPIDsRequest() {
    return { pid: 0 };
}
exports.GetUserFriendPIDsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.pid !== 0) {
            writer.uint32(8).uint32(message.pid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserFriendPIDsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.pid = reader.uint32();
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
        return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        return obj;
    },
    create: function (base) {
        return exports.GetUserFriendPIDsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserFriendPIDsRequest();
        message.pid = (_a = object.pid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseGetUserFriendPIDsResponse() {
    return { pids: [] };
}
exports.GetUserFriendPIDsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.pids; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserFriendPIDsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag == 8) {
                        message.pids.push(reader.uint32());
                        continue;
                    }
                    if (tag == 10) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.pids.push(reader.uint32());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { pids: Array.isArray(object === null || object === void 0 ? void 0 : object.pids) ? object.pids.map(function (e) { return Number(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pids) {
            obj.pids = message.pids.map(function (e) { return Math.round(e); });
        }
        else {
            obj.pids = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetUserFriendPIDsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserFriendPIDsResponse();
        message.pids = ((_a = object.pids) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
