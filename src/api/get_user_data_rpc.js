"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDataResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const mii_1 = require("./mii");
const user_connections_1 = require("./user_connections");
exports.protobufPackage = "api";
function createBaseGetUserDataResponse() {
    return {
        deleted: false,
        creationDate: "",
        updatedDate: "",
        pid: 0,
        username: "",
        accessLevel: 0,
        serverAccessLevel: "",
        mii: undefined,
        birthday: "",
        gender: "",
        country: "",
        timezone: "",
        language: "",
        emailAddress: "",
        connections: undefined,
        marketingFlag: false,
    };
}
exports.GetUserDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deleted === true) {
            writer.uint32(8).bool(message.deleted);
        }
        if (message.creationDate !== "") {
            writer.uint32(18).string(message.creationDate);
        }
        if (message.updatedDate !== "") {
            writer.uint32(26).string(message.updatedDate);
        }
        if (message.pid !== 0) {
            writer.uint32(32).uint32(message.pid);
        }
        if (message.username !== "") {
            writer.uint32(42).string(message.username);
        }
        if (message.accessLevel !== 0) {
            writer.uint32(48).uint32(message.accessLevel);
        }
        if (message.serverAccessLevel !== "") {
            writer.uint32(58).string(message.serverAccessLevel);
        }
        if (message.mii !== undefined) {
            mii_1.Mii.encode(message.mii, writer.uint32(66).fork()).ldelim();
        }
        if (message.birthday !== "") {
            writer.uint32(74).string(message.birthday);
        }
        if (message.gender !== "") {
            writer.uint32(82).string(message.gender);
        }
        if (message.country !== "") {
            writer.uint32(90).string(message.country);
        }
        if (message.timezone !== "") {
            writer.uint32(98).string(message.timezone);
        }
        if (message.language !== "") {
            writer.uint32(106).string(message.language);
        }
        if (message.emailAddress !== "") {
            writer.uint32(114).string(message.emailAddress);
        }
        if (message.connections !== undefined) {
            user_connections_1.UserConnections.encode(message.connections, writer.uint32(122).fork()).ldelim();
        }
        if (message.marketingFlag === true) {
            writer.uint32(128).bool(message.marketingFlag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.deleted = reader.bool();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.creationDate = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updatedDate = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.pid = reader.uint32();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.accessLevel = reader.uint32();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.serverAccessLevel = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.mii = mii_1.Mii.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.birthday = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.gender = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.country = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.timezone = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    message.emailAddress = reader.string();
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.connections = user_connections_1.UserConnections.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag != 128) {
                        break;
                    }
                    message.marketingFlag = reader.bool();
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
            deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
            creationDate: isSet(object.creationDate) ? String(object.creationDate) : "",
            updatedDate: isSet(object.updatedDate) ? String(object.updatedDate) : "",
            pid: isSet(object.pid) ? Number(object.pid) : 0,
            username: isSet(object.username) ? String(object.username) : "",
            accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
            serverAccessLevel: isSet(object.serverAccessLevel) ? String(object.serverAccessLevel) : "",
            mii: isSet(object.mii) ? mii_1.Mii.fromJSON(object.mii) : undefined,
            birthday: isSet(object.birthday) ? String(object.birthday) : "",
            gender: isSet(object.gender) ? String(object.gender) : "",
            country: isSet(object.country) ? String(object.country) : "",
            timezone: isSet(object.timezone) ? String(object.timezone) : "",
            language: isSet(object.language) ? String(object.language) : "",
            emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
            connections: isSet(object.connections) ? user_connections_1.UserConnections.fromJSON(object.connections) : undefined,
            marketingFlag: isSet(object.marketingFlag) ? Boolean(object.marketingFlag) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.deleted !== undefined && (obj.deleted = message.deleted);
        message.creationDate !== undefined && (obj.creationDate = message.creationDate);
        message.updatedDate !== undefined && (obj.updatedDate = message.updatedDate);
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        message.username !== undefined && (obj.username = message.username);
        message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
        message.serverAccessLevel !== undefined && (obj.serverAccessLevel = message.serverAccessLevel);
        message.mii !== undefined && (obj.mii = message.mii ? mii_1.Mii.toJSON(message.mii) : undefined);
        message.birthday !== undefined && (obj.birthday = message.birthday);
        message.gender !== undefined && (obj.gender = message.gender);
        message.country !== undefined && (obj.country = message.country);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.language !== undefined && (obj.language = message.language);
        message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
        message.connections !== undefined &&
            (obj.connections = message.connections ? user_connections_1.UserConnections.toJSON(message.connections) : undefined);
        message.marketingFlag !== undefined && (obj.marketingFlag = message.marketingFlag);
        return obj;
    },
    create(base) {
        return exports.GetUserDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserDataResponse();
        message.deleted = object.deleted ?? false;
        message.creationDate = object.creationDate ?? "";
        message.updatedDate = object.updatedDate ?? "";
        message.pid = object.pid ?? 0;
        message.username = object.username ?? "";
        message.accessLevel = object.accessLevel ?? 0;
        message.serverAccessLevel = object.serverAccessLevel ?? "";
        message.mii = (object.mii !== undefined && object.mii !== null) ? mii_1.Mii.fromPartial(object.mii) : undefined;
        message.birthday = object.birthday ?? "";
        message.gender = object.gender ?? "";
        message.country = object.country ?? "";
        message.timezone = object.timezone ?? "";
        message.language = object.language ?? "";
        message.emailAddress = object.emailAddress ?? "";
        message.connections = (object.connections !== undefined && object.connections !== null)
            ? user_connections_1.UserConnections.fromPartial(object.connections)
            : undefined;
        message.marketingFlag = object.marketingFlag ?? false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
