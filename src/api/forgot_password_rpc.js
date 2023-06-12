"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseForgotPasswordRequest() {
    return { emailAddressOrUsername: "" };
}
exports.ForgotPasswordRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.emailAddressOrUsername !== "") {
            writer.uint32(10).string(message.emailAddressOrUsername);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForgotPasswordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.emailAddressOrUsername = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            emailAddressOrUsername: isSet(object.emailAddressOrUsername) ? String(object.emailAddressOrUsername) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.emailAddressOrUsername !== undefined && (obj.emailAddressOrUsername = message.emailAddressOrUsername);
        return obj;
    },
    create(base) {
        return exports.ForgotPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseForgotPasswordRequest();
        message.emailAddressOrUsername = object.emailAddressOrUsername ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
