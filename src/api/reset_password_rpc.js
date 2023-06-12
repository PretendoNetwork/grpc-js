"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseResetPasswordRequest() {
    return { password: "", passwordConfirm: "", token: "" };
}
exports.ResetPasswordRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        if (message.passwordConfirm !== "") {
            writer.uint32(18).string(message.passwordConfirm);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetPasswordRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.passwordConfirm = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.token = reader.string();
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
            password: isSet(object.password) ? String(object.password) : "",
            passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
            token: isSet(object.token) ? String(object.token) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.password !== undefined && (obj.password = message.password);
        message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create(base) {
        return exports.ResetPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResetPasswordRequest();
        message.password = object.password ?? "";
        message.passwordConfirm = object.passwordConfirm ?? "";
        message.token = object.token ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
