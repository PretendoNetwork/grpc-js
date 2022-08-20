"use strict";
exports.__esModule = true;
exports.FriendsDefinition = exports.protobufPackage = void 0;
var send_user_notification_wiiu_rpc_1 = require("./send_user_notification_wiiu_rpc");
var empty_1 = require("./google/protobuf/empty");
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
        }
    }
};
