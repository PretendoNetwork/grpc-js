"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDefinition = exports.protobufPackage = void 0;
const get_user_data_rpc_1 = require("./get_user_data_rpc");
exports.protobufPackage = "account";
exports.AccountDefinition = {
    name: "Account",
    fullName: "account.Account",
    methods: {
        getUserData: {
            name: "GetUserData",
            requestType: get_user_data_rpc_1.GetUserDataRequest,
            requestStream: false,
            responseType: get_user_data_rpc_1.GetUserDataResponse,
            responseStream: false,
            options: {},
        },
    },
};
