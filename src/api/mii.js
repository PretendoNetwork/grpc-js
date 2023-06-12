"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mii = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseMii() {
    return { name: "", data: "", url: "" };
}
exports.Mii = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMii();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.data = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.url = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            data: isSet(object.data) ? String(object.data) : "",
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.data !== undefined && (obj.data = message.data);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    create(base) {
        return exports.Mii.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMii();
        message.name = object.name ?? "";
        message.data = object.data ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
