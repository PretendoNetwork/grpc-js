"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseRegisterRequest() {
    return { email: "", username: "", miiName: "", password: "", passwordConfirm: "", captchaResponse: undefined };
}
exports.RegisterRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.miiName !== "") {
            writer.uint32(26).string(message.miiName);
        }
        if (message.password !== "") {
            writer.uint32(34).string(message.password);
        }
        if (message.passwordConfirm !== "") {
            writer.uint32(42).string(message.passwordConfirm);
        }
        if (message.captchaResponse !== undefined) {
            writer.uint32(50).string(message.captchaResponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.miiName = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.passwordConfirm = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.captchaResponse = reader.string();
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
            email: isSet(object.email) ? String(object.email) : "",
            username: isSet(object.username) ? String(object.username) : "",
            miiName: isSet(object.miiName) ? String(object.miiName) : "",
            password: isSet(object.password) ? String(object.password) : "",
            passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
            captchaResponse: isSet(object.captchaResponse) ? String(object.captchaResponse) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.username !== undefined && (obj.username = message.username);
        message.miiName !== undefined && (obj.miiName = message.miiName);
        message.password !== undefined && (obj.password = message.password);
        message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
        message.captchaResponse !== undefined && (obj.captchaResponse = message.captchaResponse);
        return obj;
    },
    create(base) {
        return exports.RegisterRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRegisterRequest();
        message.email = object.email ?? "";
        message.username = object.username ?? "";
        message.miiName = object.miiName ?? "";
        message.password = object.password ?? "";
        message.passwordConfirm = object.passwordConfirm ?? "";
        message.captchaResponse = object.captchaResponse ?? undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
