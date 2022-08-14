"use strict";
exports.__esModule = true;
exports.MiiverseDefinition = exports.protobufPackage = void 0;
var smm_request_post_id_rpc_1 = require("./smm_request_post_id_rpc");
exports.protobufPackage = "miiverse";
exports.MiiverseDefinition = {
    name: "Miiverse",
    fullName: "miiverse.Miiverse",
    methods: {
        /** Used by Super Mario Maker */
        sMMRequestPostId: {
            name: "SMMRequestPostId",
            requestType: smm_request_post_id_rpc_1.SMMRequestPostIdRequest,
            requestStream: false,
            responseType: smm_request_post_id_rpc_1.SMMRequestPostIdResponse,
            responseStream: false,
            options: {}
        }
    }
};
