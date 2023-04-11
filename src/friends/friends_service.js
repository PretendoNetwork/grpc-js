"use strict";
exports.__esModule = true;
exports.FriendsDefinition = exports.protobufPackage = void 0;
var get_user_friend_pids_rpc_1 = require("./get_user_friend_pids_rpc");
var empty_1 = require("./google/protobuf/empty");
var send_user_notification_wiiu_rpc_1 = require("./send_user_notification_wiiu_rpc");
exports.protobufPackage = "friends";
exports.FriendsDefinition = {
    name: "Friends",
    fullName: "friends.Friends",
    methods: {
        sendUserNotificationWiiU: {
            name: "SendUserNotificationWiiU",
            requestType: send_user_notification_wiiu_rpc_1.SendUserNotificationWiiURequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {}
        },
        getUserFriendPIDs: {
            name: "GetUserFriendPIDs",
            requestType: get_user_friend_pids_rpc_1.GetUserFriendPIDsRequest,
            requestStream: false,
            responseType: get_user_friend_pids_rpc_1.GetUserFriendPIDsResponse,
            responseStream: false,
            options: {}
        }
    }
};
