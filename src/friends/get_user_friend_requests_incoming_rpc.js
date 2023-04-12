"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GetUserFriendRequestsIncomingResponse = exports.GetUserFriendRequestsIncomingRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var friend_request_1 = require("./friend_request");
exports.protobufPackage = "friends";
function createBaseGetUserFriendRequestsIncomingRequest() {
    return { pid: 0 };
}
exports.GetUserFriendRequestsIncomingRequest = {
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
        var message = createBaseGetUserFriendRequestsIncomingRequest();
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
        return exports.GetUserFriendRequestsIncomingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserFriendRequestsIncomingRequest();
        message.pid = (_a = object.pid) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseGetUserFriendRequestsIncomingResponse() {
    return { friendRequests: [] };
}
exports.GetUserFriendRequestsIncomingResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.friendRequests; _i < _a.length; _i++) {
            var v = _a[_i];
            friend_request_1.FriendRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : minimal_1["default"].Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserFriendRequestsIncomingResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.friendRequests.push(friend_request_1.FriendRequest.decode(reader, reader.uint32()));
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
            friendRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.friendRequests)
                ? object.friendRequests.map(function (e) { return friend_request_1.FriendRequest.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.friendRequests) {
            obj.friendRequests = message.friendRequests.map(function (e) { return e ? friend_request_1.FriendRequest.toJSON(e) : undefined; });
        }
        else {
            obj.friendRequests = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.GetUserFriendRequestsIncomingResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserFriendRequestsIncomingResponse();
        message.friendRequests = ((_a = object.friendRequests) === null || _a === void 0 ? void 0 : _a.map(function (e) { return friend_request_1.FriendRequest.fromPartial(e); })) || [];
        return message;
    }
};
function isSet(value) {
    return value !== null && value !== undefined;
}
