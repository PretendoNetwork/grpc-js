"use strict";
exports.__esModule = true;
exports.AccountDefinition = exports.protobufPackage = void 0;
var is_banned_rpc_1 = require("./is_banned_rpc");
var get_basic_user_data_rpc_1 = require("./get_basic_user_data_rpc");
var register_pnid_rpc_1 = require("./register_pnid_rpc");
var login_rpc_1 = require("./login_rpc");
exports.protobufPackage = "account";
exports.AccountDefinition = {
    name: "Account",
    fullName: "account.Account",
    methods: {
        /** Used by Juxt */
        isBanned: {
            name: "IsBanned",
            requestType: is_banned_rpc_1.IsBannedRequest,
            requestStream: false,
            responseType: is_banned_rpc_1.IsBannedResponse,
            responseStream: false,
            options: {}
        },
        getBasicUserData: {
            name: "GetBasicUserData",
            requestType: get_basic_user_data_rpc_1.GetBasicUserDataRequest,
            requestStream: false,
            responseType: get_basic_user_data_rpc_1.GetBasicUserDataResponse,
            responseStream: false,
            options: {}
        },
        /** Used by website */
        registerPNID: {
            name: "RegisterPNID",
            requestType: register_pnid_rpc_1.RegisterPNIDRequest,
            requestStream: false,
            responseType: login_rpc_1.LoginResponse,
            responseStream: false,
            options: {}
        },
        login: {
            name: "Login",
            requestType: login_rpc_1.LoginRequest,
            requestStream: false,
            responseType: login_rpc_1.LoginResponse,
            responseStream: false,
            options: {}
        }
    }
};
