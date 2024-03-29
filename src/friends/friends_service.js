"use strict";
exports.__esModule = true;
exports.FriendsDefinition = exports.protobufPackage = void 0;
var accept_friend_request_rpc_1 = require("./accept_friend_request_rpc");
var deny_friend_request_rpc_1 = require("./deny_friend_request_rpc");
var get_user_friend_pids_rpc_1 = require("./get_user_friend_pids_rpc");
var get_user_friend_requests_incoming_rpc_1 = require("./get_user_friend_requests_incoming_rpc");
var empty_1 = require("./google/protobuf/empty");
var send_user_friend_request_rpc_1 = require("./send_user_friend_request_rpc");
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
        },
        sendUserFriendRequest: {
            name: "SendUserFriendRequest",
            requestType: send_user_friend_request_rpc_1.SendUserFriendRequestRequest,
            requestStream: false,
            responseType: send_user_friend_request_rpc_1.SendUserFriendRequestResponse,
            responseStream: false,
            options: {}
        },
        getUserFriendRequestsIncoming: {
            name: "GetUserFriendRequestsIncoming",
            requestType: get_user_friend_requests_incoming_rpc_1.GetUserFriendRequestsIncomingRequest,
            requestStream: false,
            responseType: get_user_friend_requests_incoming_rpc_1.GetUserFriendRequestsIncomingResponse,
            responseStream: false,
            options: {}
        },
        acceptFriendRequest: {
            name: "AcceptFriendRequest",
            requestType: accept_friend_request_rpc_1.AcceptFriendRequestRequest,
            requestStream: false,
            responseType: accept_friend_request_rpc_1.AcceptFriendRequestResponse,
            responseStream: false,
            options: {}
        },
        denyFriendRequest: {
            name: "DenyFriendRequest",
            requestType: deny_friend_request_rpc_1.DenyFriendRequestRequest,
            requestStream: false,
            responseType: deny_friend_request_rpc_1.DenyFriendRequestResponse,
            responseStream: false,
            options: {}
        }
    }
};
