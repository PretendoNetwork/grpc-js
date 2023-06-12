"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIDefinition = exports.protobufPackage = void 0;
const forgot_password_rpc_1 = require("./forgot_password_rpc");
const get_user_data_rpc_1 = require("./get_user_data_rpc");
const empty_1 = require("./google/protobuf/empty");
const login_rpc_1 = require("./login_rpc");
const register_rpc_1 = require("./register_rpc");
const reset_password_rpc_1 = require("./reset_password_rpc");
const set_discord_connection_data_rpc_1 = require("./set_discord_connection_data_rpc");
const set_stripe_connection_data_rpc_1 = require("./set_stripe_connection_data_rpc");
const update_user_data_rpc_1 = require("./update_user_data_rpc");
exports.protobufPackage = "api";
exports.APIDefinition = {
    name: "API",
    fullName: "api.API",
    methods: {
        register: {
            name: "Register",
            requestType: register_rpc_1.RegisterRequest,
            requestStream: false,
            responseType: login_rpc_1.LoginResponse,
            responseStream: false,
            options: {},
        },
        login: {
            name: "Login",
            requestType: login_rpc_1.LoginRequest,
            requestStream: false,
            responseType: login_rpc_1.LoginResponse,
            responseStream: false,
            options: {},
        },
        getUserData: {
            name: "GetUserData",
            requestType: empty_1.Empty,
            requestStream: false,
            responseType: get_user_data_rpc_1.GetUserDataResponse,
            responseStream: false,
            options: {},
        },
        updateUserData: {
            name: "UpdateUserData",
            requestType: update_user_data_rpc_1.UpdateUserDataRequest,
            requestStream: false,
            responseType: get_user_data_rpc_1.GetUserDataResponse,
            responseStream: false,
            options: {},
        },
        forgotPassword: {
            name: "ForgotPassword",
            requestType: forgot_password_rpc_1.ForgotPasswordRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        resetPassword: {
            name: "ResetPassword",
            requestType: reset_password_rpc_1.ResetPasswordRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        setDiscordConnectionData: {
            name: "SetDiscordConnectionData",
            requestType: set_discord_connection_data_rpc_1.SetDiscordConnectionDataRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
        setStripeConnectionData: {
            name: "SetStripeConnectionData",
            requestType: set_stripe_connection_data_rpc_1.SetStripeConnectionDataRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {},
        },
    },
};
